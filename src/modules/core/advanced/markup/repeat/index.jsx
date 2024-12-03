import { 
  createSmartContext,
  resolveProperty, 
  useReducerAsContext, 
} from '@lib-react-bricks/src/modules/core/utils';

// -------------------------------------------------------------------------- //
// A feature - to create a list of child components according to the template.
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// Based on wrapped component and an array of source data.
// Supports the ability to output the result of applying a filter to the src.
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// Context and Reducer setup
// -------------------------------------------------------------------------- //

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

// -------------------------------------------------------------------------- //
// HOC implementation
// -------------------------------------------------------------------------- //

export const withRepeat = (WrappedComponent) => (props) => {
  
  const {

    first = 0, 
    length = -1,
    src, 
    Template, 

    matchingItems = null,
    nonMatchingItems = null,
    
    ...rest 

  } = props;
  
  const resolveSrc = matchingItems | Array.isArray(src) ? src : Object.values(src);
  const resolveFirst = resolveProperty(first, props);
  const resolveLength = resolveProperty(length, props) == -1 
    ? resolveSrc.length 
    : Math.min(resolveSrc.length, length);
  const resolveRange = resolveFirst + resolveLength;

  const ctx = useReducerAsContext(reducer, { 
    ...stateInitial, 
    first: resolveFirst,
    length: resolveLength,
    range: resolveRange,
    src: resolveSrc,
    matchingItems,
    nonMatchingItems,
  });

  const children = resolveSrc
    .slice(resolveFirst, resolveRange)
    .map(
      (item, index) => (
        <Template key={item.id || index} index={index} item={item}/>
      )
    );

  return (
    <RepeatContext.Provider value={ctx}>
      {WrappedComponent ? (
        <WrappedComponent {...rest}>
          {children}
        </WrappedComponent>
      ) : (
        <>{children}</>
      )}
    </RepeatContext.Provider>
  );
};

// -------------------------------------------------------------------------- //