import { 
  createSmartContext,
  useReducerAsContext, 
} from '@lib-react-bricks/src/modules/core/utils';

// -------------------------------------------------------------------------- //
// A feature - to handle a change in the value of a component (option from src).
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// Context and Reducer setup
// -------------------------------------------------------------------------- //

const getIndex = (state, action) => {

  const {matchingItems, max, loop, index: prev } = state;
  
  switch (action.type) {
    
    case 'CHANGE':
      {
        const {next} = action.payload;
        return loop ? (next + max) % max : Math.max(0, Math.min(next, max));
      }

    case "DECREMENT":
    case 'MOVE_CURSOR_UP':
      {
        return loop ? (prev - 1 + max) % max : Math.max(prev - 1, 0);
      }
        
    case "INCREMENT":
    case 'MOVE_CURSOR_DOWN':
      {
        return loop ? (prev + 1 + max) % max : Math.min(prev + 1, max);
      }  

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
      
  }
  
}

const reducer = (state, action) => {

  const index = getIndex(state, action);
  const value = state.matchingItems[index];
  if(value != state.value) state.valueChange(value, state.value)
  return {... state, index, value};

};

const {ValueOptionContext, useValueOption} = createSmartContext("ValueOption");
export {useValueOption};

// -------------------------------------------------------------------------- //
// HOC implementation
// -------------------------------------------------------------------------- //

export const withValueOption = (WrappedComponent) => (props) => {

  const {
    loop = false,
    value = null, 
    valueChange = (next) => next,
    src = [], 
    index = 0,
  } = props;

  const ctx = useReducerAsContext(reducer, {
    matchingItems: src,
    max:  src.length,
    loop, 
    index,
    value: src[index],
    valueChange,
  });

  return (
    <ValueOptionContext.Provider value={ctx}>
      <WrappedComponent
        {...props}
      />
    </ValueOptionContext.Provider>
  );
};


// -------------------------------------------------------------------------- //