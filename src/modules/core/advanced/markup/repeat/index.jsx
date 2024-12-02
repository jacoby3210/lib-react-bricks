import { 
  createSmartContext,
  reduceProperty, 
  useReducerAsContext, 
} from '@lib-react-bricks/src/modules/core/utils';

// -------------------------------------------------------------------------- //
// A feature - to create a list of child components according to the template.
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// based on wrapped component and an array of source data.
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
  
  // unpack data

  const {
    children,
    
    first = 0, 
    length = -1,
    src, 
    Template, 

    matchingItems = null,
    
    ...rest 
  } = props;
  
  const {value} = props;

  // reduce props  

  const srcReduce = matchingItems | Array.isArray(src) ? src : Object.values(src);
  const firstReduce = reduceProperty(first, props);
  const lengthReduce = reduceProperty(length, props) == -1 
    ? srcReduce.length 
    : Math.min(srcReduce.length, length);
  const rangeReduce = firstReduce + lengthReduce;

  // render

  const childrenReduce = srcReduce
    .slice(firstReduce, rangeReduce)
    .map(
      (item, index) => (
        <Template key={item.id || index} index={index} item={item}/>
      )
    );
  
  const ctx = useReducerAsContext(reducer, { 
    ...stateInitial, 
    first: firstReduce,
    length: lengthReduce,
    src: srcReduce,
  });

  return (
    <RepeatContext.Provider value={ctx}>
      {WrappedComponent ? (
        <WrappedComponent {...rest}>
          {childrenReduce}
        </WrappedComponent>
      ) : (
        <>{children}</>
      )}
    </RepeatContext.Provider>
  );
};

// -------------------------------------------------------------------------- //