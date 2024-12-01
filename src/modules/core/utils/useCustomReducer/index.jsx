import { useReducer } from "react";

// -------------------------------------------------------------------------- //
// A helper hooks to converts the array returned by useReducer into object.
// -------------------------------------------------------------------------- //

export const useCustomReducer = (reducer, state) => {

  const [state, dispatch] = useReducer(reducer, { ...stateInitial, shown });
  return {state, dispatch};
}

// -------------------------------------------------------------------------- //