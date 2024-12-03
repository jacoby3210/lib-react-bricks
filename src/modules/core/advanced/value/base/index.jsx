import { 
  createSmartContext, 
  useReducerAsContext,
} from '@lib-react-bricks/src/modules/core/utils';

// -------------------------------------------------------------------------- //
// A feature - to handle a change in the value of a component (base\variant).
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// Context and Reducer setup
// -------------------------------------------------------------------------- //

const reducer = (state, action) => {

  //  unpack data

  const {value, valueChange, valueNormalize} = state;

  // behavior

  switch (action.type) {

    case "CHANGE":
      {
        const next = valueNormalize(action.payload.next, value, state);
        if(next != state.value) valueChange(next, value)
        return {... state, value: next}
      }
      break;

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }

};

const {ValueBaseContext, useValueBase} = createSmartContext("ValueBase");
export {useValueBase};

// -------------------------------------------------------------------------- //
// HOC implementation
// -------------------------------------------------------------------------- //

export const withValueBase = (WrappedComponent) => (props) => {

  const {
    value = null,
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
    <ValueBaseContext.Provider value={ctx}>
      <WrappedComponent {...rest} />
    </ValueBaseContext.Provider>
  );

};

// -------------------------------------------------------------------------- //