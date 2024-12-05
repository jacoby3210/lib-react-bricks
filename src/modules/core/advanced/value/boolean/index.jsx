import { 
  createSmartContext, 
  useReducerAsContext,
} from '@lib-react-bricks/src/modules/core/utils';

// -------------------------------------------------------------------------- //
// A feature - to handle a change in the value (type: boolean).
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// Context and Reducer setup
// -------------------------------------------------------------------------- //

const reducer = (state, action) => {

  const {value, valueChange, valueNormalize,  } = state;

  switch (action.type) {

    case "CHANGE":
      {
        const next = valueNormalize(action.payload.next, value, state);
        if(next != state.value) valueChange(next, value)
        return {... state, value: next}
      }
      break;

    case "INVERT":
    case "TOGGLE":
      {
        const next = valueNormalize(!value, value, state);
        if(next != state.value) valueChange(next, value)
        return {... state, value: next}
      }  
      break;

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }

};

const {ValueBooleanContext, useValueBoolean} = createSmartContext("ValueBoolean");
export {useValueBoolean};

// -------------------------------------------------------------------------- //
// HOC implementation
// -------------------------------------------------------------------------- //

export const withValueBoolean = (WrappedComponent) => (props) => {

  const {
    value = false,
    valueChange = (next, prev, state) => next, 
    valueNormalize = (value) => value,
    ...rest
  } = props;

  const ctx = useReducerAsContext(reducer, 
    {
      value,
      valueChange,
      valueNormalize,
    }
  );

  return (
    <ValueBooleanContext.Provider value={ctx}>
      <WrappedComponent {...rest} />
    </ValueBooleanContext.Provider>
  );

};

// -------------------------------------------------------------------------- //