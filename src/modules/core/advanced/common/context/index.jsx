import { createContext, useReducer } from "react";

// -------------------------------------------------------------------------- //
//  A feature - to wrap base component into smart context (data & dispatch).
// -------------------------------------------------------------------------- //

export const withContext = (ContextData, ContextDispatch, reducer, state) => {
  return (WrappedComponent) => {
    return (props) => {
      const [ctxState, ctxDispatch] = useReducer(reducer, state);

      return (
        <ContextData.Provider value={ctxState}>
          <ContextDispatch.Provider value={ctxDispatch}>
            <WrappedComponent {...props} />
          </ContextDispatch.Provider>
        </ContextData.Provider>
      );
    };
  };
};

// -------------------------------------------------------------------------- //
