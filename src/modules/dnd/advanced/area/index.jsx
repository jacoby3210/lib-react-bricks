import React, { useRef } from "react";
import {
  createSmartContext,
  useReducerAsContext,
} from "@lib-react-bricks/src/modules/utils";
import { getBoundary } from "./utils";

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

      const { area } = state;
      const { e } = action.payload;
      const drag = e.target;

      return {
        ...state,
        capture: true,
        boundary: getBoundary(area.current, drag, e.pageX, e.pageY),
        mode: drag.getAttribute("mode") || "self",
        source: drag,
      };
    }

    case "RELEASE": {
      console.log("RELEASE");
      return { ...state, capture: false, mode: null, source: null };
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
    mode: false,
    source: null,
  });

  return (
    <AreaContext.Provider value={ctx}>
      <WrappedComponent {...props} />
    </AreaContext.Provider>
  );
};
// -------------------------------------------------------------------------- //
