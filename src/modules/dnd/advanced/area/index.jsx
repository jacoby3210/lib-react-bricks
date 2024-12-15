import React, { useRef } from "react";
import {
  createSmartContext,
  useReducerAsContext,
} from "@lib-react-bricks/src/modules/utils";
import { getEdge } from "./utils";

// -------------------------------------------------------------------------- //
// A feature - to control the area in which UI components are drag & drop.
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// Context and Reducer setup
// -------------------------------------------------------------------------- //

const initialState = {
  capture: false,
  edge: { x1: 0, y1: 0, x2: 0, y2: 0 },
  source: null,
  target: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CAPTURE": {
      console.log("CAPTURE");

      const { area } = state;
      const { e, data } = action.payload;
      const edge = getEdge(area.current, e.target, e.pageX, e.pageY);
      const source = e.target;

      return { ...state, capture: true, data, edge, source };
    }

    case "RELEASE": {
      console.log("RELEASE");
      return { ...state, capture: false, ...initialState };
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
    area: useRef(null),
    capture: false,
    ...initialState,
  });

  return (
    <AreaContext.Provider value={ctx}>
      <WrappedComponent {...props} />
    </AreaContext.Provider>
  );
};
// -------------------------------------------------------------------------- //
