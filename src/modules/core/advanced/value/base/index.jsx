import { useReducer, } from 'react';
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

  const {value, validate, whenValueChange,  whenValueModify, } = state;

  // behavior

  switch (action.type) {

    case "CHANGE":
      {
        return {
          ... state, 
          value: validate(whenValueChange(action.payload.next), value)
        }
      }
      break;

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }

};

const stateInitial = {
  value: null,
  validate: (next, prev) => next,
  whenValueChange: (value) => value, 
};

const {ValueBaseContext, useValueBase} = createSmartContext("ValueBase");
export {useValueBase};

// -------------------------------------------------------------------------- //
// HOC implementation
// -------------------------------------------------------------------------- //

export const withValueBase = (WrappedComponent) => (props) => {

  // unpack data

  const {
    value = null,
    validate = (value) => value,
    whenValueChange = (next, validate) => next, 
    ...rest
  } = props;

  // hooks

  const ctx = useReducerAsContext(reducer, 
    {
      ...stateInitial, 
      value,
      validate,
      whenValueChange,
    }
  );

  // render

  return (
    <ValueBaseContext.Provider value={ctx}>
      <WrappedComponent {...rest} />
    </ValueBaseContext.Provider>
  );

};

// -------------------------------------------------------------------------- //