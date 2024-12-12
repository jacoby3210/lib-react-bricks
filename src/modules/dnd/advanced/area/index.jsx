import React, { useCallback, useEffect, useRef } from "react";
import {
  createSmartContext,
  useReducerAsContext,
} from "@lib-react-bricks/src/modules/core/utils";
import { createCursor, calcBoundary, scan } from "./utils";

// -------------------------------------------------------------------------- //
// A feature - to control the area in which UI components are drag & drop.
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// Context and Reducer setup
// -------------------------------------------------------------------------- //

const reducer = (state, action) => {
  switch (action.type) {
    case "CAPTURE": {
      console.log("CAPTURE");
      return { ...state, capture: true };
    }

    case "RELEASE": {
      console.log("RELEASE");
      return { ...state, capture: false };
    }

    case "MOVE": {
      console.log("MOVE");
      return { ...state };
    }

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const { AreaContext, useArea } = createSmartContext("Area");
export { useArea };

// -------------------------------------------------------------------------- //
// HOC implementation
// -------------------------------------------------------------------------- //

export const withArea = (WrappedComponent) => (props) => {
  const { children } = props;
  const area = useRef(null);

  const ctx = useReducerAsContext(reducer, {
    area: useRef(null),
    capture: false,
    boundary: { x1: 0, y1: 0, x2: 0, y2: 0 },
    cursor: null,
    drag: null,
    drop: null,
  });

  const dispatchCustomEvent = (eventName, detail) => {
    const customEvent = new CustomEvent(eventName, { detail });
    window.dispatchEvent(customEvent);
  };

  const handleMouseDown = useCallback(
    (e) => {
      dispatchCustomEvent("drag-start", e);
      ctx.dispatch({ type: "CAPTURE", payload: { e } });
    },
    [ctx.dispatch]
  );

  const handleMouseMove = useCallback(
    (e) => {
      dispatchCustomEvent("drag-process", e);
      ctx.dispatch({ type: "MOVE", payload: { e } });
    },
    [ctx.dispatch]
  );

  useEffect(() => {
    const removeHandlers = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    const handleMouseUp = (e) => {
      dispatchCustomEvent("drag-end", e);
      ctx.dispatch({ type: "RELEASE", payload: { e } });
      removeHandlers();
    };

    if (ctx.state.capture) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      removeHandlers();
    };
  }, [ctx.state.capture]);

  return (
    <div ref={ctx.state.area} {...props} onMouseDown={handleMouseDown}>
      {children}
    </div>
  );
};
// -------------------------------------------------------------------------- //
