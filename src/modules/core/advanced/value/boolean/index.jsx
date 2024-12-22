import {
  createSmartContext,
  withContext,
} from "@lib-react-bricks/src/modules/core/advanced/common/context";

// -------------------------------------------------------------------------- //
// A feature - to handle a change in the value (type: boolean).
// -------------------------------------------------------------------------- //

const ctx = createSmartContext("ValueBoolean");
export const { useValueBoolean } = ctx;

const reducer = (state, action) => {
  const { value, valueChange, valueNormalize } = state;

  switch (action.type) {
    case "CHANGE":
      {
        const next = valueNormalize(action.payload.next, value, state);
        if (next != state.value) valueChange(next, value);
        return { ...state, value: next };
      }
      break;

    case "INVERT":
    case "TOGGLE":
      {
        const next = valueNormalize(!value, value, state);
        if (next != state.value) valueChange(next, value);
        return { ...state, value: next };
      }
      break;

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const resolver = (props) => {
  const { value = null } = props;

  const {
    valueChange = (next, prev, state) => next,
    valueNormalize = (value) => value,
    ...rest
  } = props;

  return [{ value, valueChange, valueNormalize }, rest];
};

export const withValueBoolean = (WrappedComponent) => {
  return withContext(ctx, reducer, resolver)(WrappedComponent);
};

// -------------------------------------------------------------------------- //
