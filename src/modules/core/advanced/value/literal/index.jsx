import { 
  createSmartContext, 
  resolveFunction,
  useReducerAsContext,
} from '@lib-react-bricks/src/modules/core/utils';

// -------------------------------------------------------------------------- //
// A feature - to handle a change in the value (type: literal - line\paragraph).
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// Context and Reducer setup
// -------------------------------------------------------------------------- //

const getCandidate = (state, action) => {

  const { max, min, pattern, value, } = state;

  const { next } = action.payload;

  switch (action.type) {
    
    case "CHANGE":    
      return next; 
      break;
    
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const normalize = (next, prev, {max, min, pattern}) => {
  if(next.length < min || next.length > max) return prev;
  const patternExp = new RegExp(`[${forbidden.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}]`);
  return patternExp.test(next) ? prev : next;
}

const reducer = (state, action) => {

  const { value, valueChange, valueNormalize } = state;

  const candidate = getCandidate(state, action);
  const next = valueNormalize(candidate, value, state);
  if(next != state.value) valueChange(next, value)
  return {... state, value: next}

};

const {ValueLiteralContext, useValueLiteral} = createSmartContext("ValueLiteral");
export {useValueLiteral};

// -------------------------------------------------------------------------- //
// HOC implementation
// -------------------------------------------------------------------------- //

export const withValueLiteral = (WrappedComponent) => (props) => {
  
  // initial data
  
  const {

    pattern = "", 
    
    max = 100,
    min = 0,
    
    value = "",
    valueChange = (next, prev) => next,
    valueNormalize = normalize,
  
  } = props;
  
  const maxResolve = resolveFunction(max, props);
  const minResolve = resolveFunction(min, props);
  
  const ctx = useReducerAsContext(reducer, 
    {
      
      max: maxResolve,
      min: minResolve,
      pattern,
      
      value,
      valueChange,
      valueNormalize,
    }
  );
  
  return (
    <ValueLiteralContext.Provider value={ctx}>
      <WrappedComponent {...updateProps} />;
    </ValueLiteralContext.Provider>
  );

};

// -------------------------------------------------------------------------- //