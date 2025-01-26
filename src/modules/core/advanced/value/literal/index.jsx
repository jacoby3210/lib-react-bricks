import { resolveCallback } from "/src/modules/utils";
import {
  createSmartContext,
  withContext,
} from "/src/modules/core/advanced/common/context";
import { getCandidate, normalize } from "./utils";

// -------------------------------------------------------------------------- //
// A feature - to handle a change in the value (type: literal - line\paragraph).
// -------------------------------------------------------------------------- //

const ctx = createSmartContext("ValueLiteral");
export const { useValueLiteral } = ctx;

const reducer = (state, action) => {
  const { value, valueChange, valueNormalize } = state;

  const candidate = getCandidate(state, action);
  const next = valueNormalize(candidate, value, state);
  if (next != state.value) valueChange(next, value);
  return { ...state, value: next };
};

const resolver = (props) => {
  const {
    max = 100,
    min = 0,

    pattern = "",

    valueChange = (next, prev) => next,
    valueNormalize = normalize,

    ...rest
  } = props;

  const { value = "" } = props;

  const maxResolve = resolveCallback(max, props);
  const minResolve = resolveCallback(min, props);

  const state = {
    max: maxResolve,
    min: minResolve,
    pattern,

    value,
    valueChange,
    valueNormalize,
  };

  return [state, rest];
};

export const withValueLiteral = (WrappedComponent) => {
  return withContext(ctx, reducer, resolver)(WrappedComponent);
};

// -------------------------------------------------------------------------- //
