import { useMemo, useReducer } from 'react';
import { createSmartContext } from '../../common/context';

// -------------------------------------------------------------------------- //
// A feature - to create a list of recurring items,
// based on wrapped component and an array of source data.
// Supports the ability to output the result of applying a filter to the src.
// -------------------------------------------------------------------------- //

// Context and Reducer setup

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SRC':
      return { ...state, src: action.payload };
      
    case 'SET_FIRST':
      return { ...state, first: action.payload };
    
    case 'SET_LENGTH':
      return { ...state, length: action.payload };
  
    case 'SET_MATCHING_ITEMS':
      return { ...state, matchingItems: action.payload };

    case 'SET_VALUE':
      return { ...state, value: action.payload };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};


const stateInitial = {
  src: [],
  first: 0,
  length: -1,
  matchingItems: null,
  value: null,
};

const {RepeatContext, useRepeat} = createSmartContext("Repeat", reducer);

export {useRepeat};

export const withRepeat = (WrappedComponent) => (props) => {
  
  // unpack data

  const {
    first = 0, 
    length = -1,
    matchingItems,
    src, 
    Template, 
    ...rest 
  } = props;
  const {value} = props;

  // Memoized source data
  
  const srcMemo = useMemo(() => {
    if (matchingItems) return matchingItems;
    return Array.isArray(src) ? src : Object.values(src);
  }, [src, matchingItems]);

  // Memoized starting index
  
  const firstMemo = useMemo(() => {
    if (typeof first === 'function') return first(rest);
    return first;
  }, [first, rest, srcMemo]);

  // Memoized length
  
  const lengthMemo = useMemo(() => {
    if (length === -1) return srcMemo.length;
    return Math.min(srcMemo.length, length);
  }, [length, rest, srcMemo]);

  // generate children

  const renderChildren = () => {
    return srcMemo
      .slice(firstMemo, firstMemo + lengthMemo)
      .map((item, index) => (
        <Template
          key={item.id || index}
          common={props}
          item={item}
          index={index}
        />
      ));
  };

  const children = useMemo(
    renderChildren, 
    [srcMemo, firstMemo, lengthMemo, Template, value]
  );

  // render
  
  const [state, dispatch] = useReducer(reducer, {
    ...stateInitial,
    first: firstMemo,
    length: lengthMemo,
    src: srcMemo,
  });
  const context = { state, dispatch };

  return (
    <RepeatContext.Provider value={context}>
      {WrappedComponent ? (
        <WrappedComponent {...rest}>{children}</WrappedComponent>
      ) : (
        <>{children}</>
      )}
    </RepeatContext.Provider>
  );
};

// -------------------------------------------------------------------------- //