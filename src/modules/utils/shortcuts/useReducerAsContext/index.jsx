import { useReducer } from "react";

// -------------------------------------------------------------------------- //
// A helper hook to converts the array returned by useReducer into object.
// -------------------------------------------------------------------------- //

export const useReducerAsContext = (reducer, stateInitial) => {
  const [state, dispatch] = useReducer(reducer, stateInitial);
  return { state, dispatch };
};

// -------------------------------------------------------------------------- //
