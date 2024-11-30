import { createContext, useReducer, useContext } from "react";

// -------------------------------------------------------------------------- //
// A feature - to smart context creation.
// -------------------------------------------------------------------------- //

export const createSmartContext = (name) => {
  const Context = createContext();

  const useContextValue = () => {
    const context = useContext(Context);
    if (!context) {
      throw new Error(`use${name} must be used within a ${name}Provider`);
    }
    return context;
  };

  return {
    [`${name}Context`]: Context,
    [`use${name}`]: useContextValue,
  };
};

// -------------------------------------------------------------------------- //