import { 
  createSmartContext, 
  resolveProperty,
  useReducerAsContext,
} from '@lib-react-bricks/src/modules/core/utils';

// -------------------------------------------------------------------------- //
// A feature - to handle a change in the value of a component (numeric type).
// -------------------------------------------------------------------------- //

const getDecimalPlaces = (num) => {
  const decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
};

const normalize = (next, prev, {max, min, modular, step}) => {
  const wrappedValue = modular ? (next + max) % max : Math.max(Math.min(next, max), min);
  const steppedValue = Math.round(wrappedValue / step) * step;
  return parseFloat(steppedValue.toFixed(getDecimalPlaces(step)));
};

// -------------------------------------------------------------------------- //
// Context and Reducer setup
// -------------------------------------------------------------------------- //

const reducer = (state, action) => {

  const {
    step,
    value, 
    valueChange,
    valueNormalize, 
  } = state;

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
        const next = valueNormalize(-value, value, state);
        if(next != state.value) valueChange(next, value)
        return {... state, value: next}
      }  
      break;

    case "MODIFY":
      {
        const next = valueNormalize(value + (action.payload?.modifier || step), value, state);
        if(next != state.value) valueChange(next, value)
        return {... state, value: next}
      }  
      break;

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }

};

const {ValueDigitalContext, useValueDigital} = createSmartContext("ValueDigital");
export {useValueDigital};

// -------------------------------------------------------------------------- //
// HOC implementation
// -------------------------------------------------------------------------- //

export const withValueDigital = (WrappedComponent) => (props) => {

  const {
    modular = false,
    max = 100,
    min = 0,
    step = 1,
    value = 0,
    valueChange = (next) => next,
    valueNormalize = normalize,
    ...rest
  } = props;

  const maxReduce = resolveProperty(max, props);
  const minReduce = resolveProperty(min, props);
  const stepReduce = resolveProperty(step, props);

  const ctx = useReducerAsContext(reducer, 
    {
      modular,
      max: maxReduce,
      min: minReduce,
      step: stepReduce,
      value,
      valueChange,
      valueNormalize,
    }
  );

  return (
    <ValueDigitalContext.Provider value={ctx}>
      <WrappedComponent {...rest} />
    </ValueDigitalContext.Provider>
  );
};

// -------------------------------------------------------------------------- //