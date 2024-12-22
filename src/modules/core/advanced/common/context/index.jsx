import { useReducer } from "react";
import { createContext, useContextSelector } from "use-context-selector";

// -------------------------------------------------------------------------- //
//  A feature - to wrap base component into smart context (data & dispatch).
// -------------------------------------------------------------------------- //

export const createSmartContext = (name) => {
  const DispatchContext = createContext();
  const StateContext = createContext();

  const useContextValue = (selector = (ctx) => ctx) => {
    const dispatch = useContextSelector(DispatchContext, (ctx) => ctx);

    const state = selector
      ? useContextSelector(StateContext, selector)
      : undefined;

    return selector ? { dispatch, state } : { dispatch };
  };

  return { DispatchContext, StateContext, [`use${name}`]: useContextValue };
};

export const withContext = (ctx, reducer, resolver) => {
  return (WrappedComponent) => {
    return (props) => {
      const [state, rest] = resolver(props);
      const [ctxState, ctxDispatch] = useReducer(reducer, state);
      const updateProps = {
        ...rest,
        index: ctxState.index,
        value: ctxState.value,
      };
      return (
        <ctx.StateContext.Provider value={ctxState}>
          <ctx.DispatchContext.Provider value={ctxDispatch}>
            <WrappedComponent {...updateProps} />
          </ctx.DispatchContext.Provider>
        </ctx.StateContext.Provider>
      );
    };
  };
};

// -------------------------------------------------------------------------- //
