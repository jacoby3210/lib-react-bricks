import React, { useRef, useReducer, useMemo, useState, useEffect } from "react";
import { createSmartContext } from "@lib-react-bricks/src/modules/utils";

// -------------------------------------------------------------------------- //
// A feature - to present common drag dispatch & drag state contexts.
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// Context and Reducer setup
// -------------------------------------------------------------------------- //

const resetSelection = (state) => {
  if (state.components.target?.current) {
    state.components.target.current.classList.remove("selected");
    state.components.target.current = null;
  }
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CAPTURE": {
      console.log("CAPTURE");
      const { event, source } = action.payload;

      return {
        capture: true,
        components: { ...state.components, source },
        event,
      };
    }

    case "RELEASE": {
      console.log("RELEASE");
      resetSelection(state);

      return { ...state, capture: false };
    }

    case "SET_TARGET": {
      if (!state.capture) return state;

      console.log("SET_TARGET");
      const { event, target } = action.payload;

      resetSelection(state);

      if (target?.current) {
        state.components.target.current = target?.current;
        state.components.target.current.classList.add("selected");
      }

      return state;
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
    components: {
      area: useRef(null),
      cursor: useRef(null),
      source: useRef(null),
      target: useRef(null),
    },
    event: {},
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
