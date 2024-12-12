import { useCallback, useEffect } from "react";
import {
  createSmartContext,
  useReducerAsContext,
} from "@lib-react-bricks/src/modules/core/utils";
import { scan } from "./utils";

// -------------------------------------------------------------------------- //
// A feature - to control the area in which UI components are drag & drop.
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// Context and Reducer setup
// -------------------------------------------------------------------------- //

const reducer = (state, action) => {
  switch (action.type) {
    case "CAPTURE": {
      const { drag, e } = action.payload;
      const cursor = createCursor(state.area, drag, e);
      const boundary = calcBoundary(state.area, cursor, e);

      return { ...state, boundary, cursor, drag };
    }

    case "RELEASE": {
      return { ...state, capture: false };
    }

    case "MOVE": {
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
  const ctx = useReducerAsContext(reducer, {
    area: null,
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

  const handleMouseDown = (e) => dispatchCustomEvent("drag-start", e);

  return (
    <div
      style={{ position: "absolute", cursor: "grab" }}
      onMouseDown={handleMouseDown}
    >
      <WrappedComponent {...props} />
    </div>
  );
};
// -------------------------------------------------------------------------- //
