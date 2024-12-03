import { useReducer, } from 'react';
import { 
  createSmartContext, 
  useReducerAsContext,
} from '@lib-react-bricks/src/modules/core/utils';

// -------------------------------------------------------------------------- //
// A feature - to handle a change in the value of a component (boolean).
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

    case "INVERT":
    case "TOGGLE":
      {
        return {
          ... state, 
          value: validate(whenValueChange(!value), value)
        }
      }  
      break;

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }

};

const stateInitial = {
  value: false,
  validate: (next, prev) => next,
  whenValueChange: (value) => value, 
};

const {ValueBooleanContext, useValueBoolean} = createSmartContext("ValueBoolean");
export {useValueBoolean};

// -------------------------------------------------------------------------- //
// HOC implementation
// -------------------------------------------------------------------------- //

export const withValueBoolean = (WrappedComponent) => (props) => {

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
    <ValueBooleanContext.Provider value={ctx}>
      <WrappedComponent {...rest} />
    </ValueBooleanContext.Provider>
  );

};

// -------------------------------------------------------------------------- //