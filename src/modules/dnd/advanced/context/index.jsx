import React, { useRef, useReducer, useMemo, useState, useEffect } from "react";
import { createSmartContext } from "@lib-react-bricks/src/modules/utils";

// -------------------------------------------------------------------------- //
// A feature - to present common drag dispatch & drag state contexts.
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// Context and Reducer setup
// -------------------------------------------------------------------------- //

const reducer = (state, action) => {
  switch (action.type) {
    case "CAPTURE": {
      console.log("CAPTURE");
      const { event, source } = action.payload;

      return { capture: true, components: { ...state.components, source } };
    }

    case "RELEASE": {
      console.log("RELEASE");

      return { ...state, capture: false };
    }

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const { DragDispatchContext, useDragDispatch } =
  createSmartContext("DragDispatch");
const { DragStateContext, useDragState } = createSmartContext("DragState");
export { DragStateContext, useDragState, DragDispatchContext, useDragDispatch };

// -------------------------------------------------------------------------- //
// HOC implementation
// -------------------------------------------------------------------------- //

export const withDragContext = (WrappedComponent) => (props) => {
  const [state, dispatch] = useReducer(reducer, {
    capture: false,
    components: { area: useRef(null), cursor: useRef(null) },
  });

  const valueState = useMemo(() => state, [state.capture]);

  return (
    <DragDispatchContext.Provider value={dispatch}>
      <DragStateContext.Provider value={valueState}>
        <WrappedComponent {...props} />
      </DragStateContext.Provider>
    </DragDispatchContext.Provider>
  );
};

// -------------------------------------------------------------------------- //
