import {
  createSmartContext,
  withContext,
} from "/src/modules/core/advanced/common/context";
import { getIndex, resolveProps } from "./utils";

// -------------------------------------------------------------------------- //
// A feature - to handle a change in the value (type: option from src).
// -------------------------------------------------------------------------- //

const ctx = createSmartContext("ValueOption");
export const { useValueOption } = ctx;

const reducer = (state, action) => {
  const index = getIndex(state, action);
  const value =
    index !== -1 ? state.dataset[index].id : action.payload?.id ?? null;

  if (value !== state.value) state.valueChange(value, state.value);
  return { ...state, index, value };
};

const resolver = (props) => {
  const {
    loop = false,
    valueChange = (next) => next,

    ...rest
  } = props;
  const { value = "" } = props;

  const propsResolve = resolveProps(props);

  const state = {
    ...propsResolve,

    loop,
    max: propsResolve.dataset.length,
    valueChange,
  };

  return [state, rest];
};

export const withValueOption = (WrappedComponent) => {
  return withContext(ctx, reducer, resolver)(WrappedComponent);
};
// -------------------------------------------------------------------------- //
