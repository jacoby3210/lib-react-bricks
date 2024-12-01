import { useReducer } from "react";

// -------------------------------------------------------------------------- //
// A helper hooks to converts the array returned by useReducer into object.
// -------------------------------------------------------------------------- //

export const useCustomReducer = (reducer, stateInitial) => {
  const [state, dispatch] = useReducer(reducer, { ...stateInitial, shown });
  return {state, dispatch};
}

// -------------------------------------------------------------------------- //