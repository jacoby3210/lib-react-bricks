import { useCallback, useEffect } from "react";
import {
  createSmartContext,
  withContext,
} from "@lib-react-bricks/src/modules/core/advanced/common/context";

// -------------------------------------------------------------------------- //
// A feature - to hide \ show children components.
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// By default WrappedComponent hides when clicked inside.
// To prevent this behavior, the click event inside should not bubble.
// -------------------------------------------------------------------------- //

const ctx = createSmartContext("Reveal");
export const { useReveal } = ctx;

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW":
      return { ...state, shown: true };

    case "HIDE":
      return { ...state, shown: false };

    case "TOGGLE":
      return { ...state, shown: !state.shown };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const resolver = (props) => {
  const { shown = false, ...rest } = props;
  const state = { shown };
  return [state, { ...rest }];
};

export const withReveal = (WrappedComponent) => {
  return withContext(
    ctx,
    reducer,
    resolver
  )((props) => {
    const {
      children,
      Controller = (props) => <button {...props}></button>,
      ...rest
    } = props;

    const ctx = useReveal();

    const handleClick = useCallback(() => {
      ctx.dispatch({ type: "HIDE" });
    }, [ctx.dispatch]);

    const handleKeyDown = useCallback(
      (evt) => {
        if (evt.key === "Enter") ctx.dispatch({ type: "HIDE" });
      },
      [ctx.dispatch]
    );

    useEffect(() => {
      if (ctx.state.shown) {
        document.addEventListener("click", handleClick);
        document.addEventListener("keydown", handleKeyDown);
      }
      return () => {
        document.removeEventListener("click", handleClick);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [ctx.state.shown, ctx.dispatch, handleClick, handleKeyDown]);

    return ctx.state.shown ? (
      <>
        <Controller {...props} />
        <WrappedComponent {...rest} />
        {children}
      </>
    ) : (
      <Controller {...props} />
    );
  });
};

// -------------------------------------------------------------------------- //
