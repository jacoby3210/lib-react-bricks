import { 
  createSmartContext, 
  resolveFunction,
  useReducerAsContext,
} from '@lib-react-bricks/src/modules/core/utils';

// -------------------------------------------------------------------------- //
// A feature - to handle a change in the value (type: digital).
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// Context and Reducer setup
// -------------------------------------------------------------------------- //

const getCandidate = (state, action) => {

  const {
    max,
    min,
    step,
    value, 
  } = state;

  const {next, modifier} = action.payload;

  switch (action.type) {
    
    case "CHANGE":    
      return next; 
      break;
    
    case "INVERT":
    case "TOGGLE":   
      return -value; 
      break;
    
    case "MODIFY":    
      return value + (modifier || step); 
      break;
    
    case "RELATIVE":  
      return min + Math.round((next * (max - min)) / step) * step; 
      break;
    
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const getDecimalPlaces = (num) => {
  const decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
};

const normalize = (next, prev, {max, min, modular, step}) => {
  const wrappedValue = modular ? (next + max) % max : Math.max(Math.min(next, max), min);
  const steppedValue = Math.round(wrappedValue / step) * step;
  return parseFloat(steppedValue.toFixed(getDecimalPlaces(step)));
};

const reducer = (state, action) => {

  const { value, valueChange, valueNormalize } = state;

  const candidate = getCandidate(state, action)
  const next = valueNormalize(candidate, value, state);
  if(next != state.value) valueChange(next, value)
  return {... state, value: next}

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
    valueChange = (next, prev) => next,
    valueNormalize = normalize,
    
    ...rest
  
  } = props;
  
  const maxResolve = resolveFunction(max, props);
  const minResolve = resolveFunction(min, props);
  const stepResolve = resolveFunction(step, props);

  const ctx = useReducerAsContext(reducer, 
    {

      modular,
      max: maxResolve,
      min: minResolve,
      step: stepResolve,

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