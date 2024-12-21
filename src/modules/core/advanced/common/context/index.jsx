import { createContext, useReducer } from "react";

// -------------------------------------------------------------------------- //
//  A feature - to wrap base component into smart context (data & dispatch).
// -------------------------------------------------------------------------- //

export const apiContext = (name) => {
  const StateContext = createContext();
  const DispatchContext = createContext();

  const useContextValue = (selector = null) => {
    const state = selector
      ? useContextSelector(StateContext, selector)
      : undefined;

    const dispatch = useContextSelector(DispatchContext, (ctx) => ctx);

    return selector ? { state, dispatch } : { dispatch };
  };

  return {
    [`${name}StateContext`]: StateContext,
    [`${name}DispatchContext`]: DispatchContext,
    [`use${name}`]: useContextValue,
  };
};

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
