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
  const area = useRef(null);

  const ctx = useReducerAsContext(reducer, {
    area: useRef(null),
    capture: false,
    boundary: { x1: 0, y1: 0, x2: 0, y2: 0 },
    cursor: null,
    drag: null,
    drop: null,
  });

  return (
    <AreaContext.Provider value={ctx}>
      <WrappedComponent {...props} />
    </AreaContext.Provider>
  );
};
// -------------------------------------------------------------------------- //
