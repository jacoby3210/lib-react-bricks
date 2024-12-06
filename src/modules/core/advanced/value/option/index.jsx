import { 
  createSmartContext,
  useReducerAsContext, 
} from '@lib-react-bricks/src/modules/core/utils';

// -------------------------------------------------------------------------- //
// A feature - to handle a change in the value (type: option from src).
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// Context and Reducer setup
// -------------------------------------------------------------------------- //

const getIndex = (state, action) => {

  const {dataset, max, loop, index: prev } = state;
  
  switch (action.type) {
    
    case 'CHANGE_BY_INDEX':
      {
        const {index} = action.payload;
        return loop ? (index + max) % max : Math.max(0, Math.min(index, max));
      }

    case 'CHANGE_BY_VALUE':
      {
        const {value} = action.payload;
        return dataset?.findIndex(item => item.id == value);
      }

    case "PREVIOUS":
    case 'MOVE_CURSOR_UP':
    case 'MOVE_CURSOR_LEFT':
      {
        return loop ? (prev - 1 + max) % max : Math.max(prev - 1, 0);
      }
        
    case "NEXT":
    case 'MOVE_CURSOR_DOWN':
    case 'MOVE_CURSOR_RIGHT':
      {
        return loop ? (prev + 1 + max) % max : Math.min(prev + 1, max);
      }  

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
      
  }
  
}

const reducer = (state, action) => {

  const index = getIndex(state, action);
  const value = state.dataset[index];
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
    
    data = [], 
    dataset = null, 
    
    index = 0,
    loop = false,
    
    value = null, 
    valueChange = (next) => next,

  } = props;

  const datasetResolve = dataset ? dataset : data;
  const ctx = useReducerAsContext(reducer, {
    dataset: datasetResolve,
    index,
    loop, 
    max:  datasetResolve.length,
    value: datasetResolve[index],
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