import { resolveFunction } from "@lib-react-bricks/src/modules/utils";
import {
  createSmartContext,
  withContext,
} from "@lib-react-bricks/src/modules/core/advanced/common/context";
import { getCandidate, normalize } from "./utils";

// -------------------------------------------------------------------------- //
// A feature - to handle a change in the value (type: digital).
// -------------------------------------------------------------------------- //

const ctx = createSmartContext("ValueDigital");
export const { useValueDigital } = ctx;

const reducer = (state, action) => {
  const { value, valueChange, valueNormalize } = state;

  const candidate = getCandidate(state, action);
  const next = valueNormalize(candidate, value, state);
  if (next != state.value) valueChange(next, value);
  return { ...state, value: next };
};

const resolver = (props) => {
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

  const state = {
    modular,
    max: maxResolve,
    min: minResolve,
    step: stepResolve,

    value,
    valueChange,
    valueNormalize,
  };

  return [state, rest];
};

export const withValueDigital = (WrappedComponent) => {
  return withContext(ctx, reducer, resolver)(WrappedComponent);
};

// -------------------------------------------------------------------------- //
