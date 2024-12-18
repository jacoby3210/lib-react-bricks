import React, { useRef, useReducer, useMemo, useState, useEffect } from "react";
import { createSmartContext } from "@lib-react-bricks/src/modules/utils";

// -------------------------------------------------------------------------- //
// A feature - to present common drag dispatch & drag state contexts.
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// Context and Reducer setup
// -------------------------------------------------------------------------- //

const resetSelection = (state) => {
  if (state.components.target) {
    state.components.target.classList.remove("selected");
    state.components.target = null;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CAPTURE": {
      console.log("CAPTURE");
      const { event, source, value } = action.payload;
      return { components: { ...state.components, source }, value };
    }

    case "RELEASE": {
      console.log("RELEASE");
      const { components, value } = state;

      if (state.components.target) {
        const customEvent = new CustomEvent("click", {
          detail: { value },
          bubbles: true,
        });
        state.components.target.dispatchEvent(customEvent);
      }

      resetSelection(state);

      return {
        components: { ...state.components, source: null, target: null },
        value: null,
      };
    }

    case "SET_TARGET": {
      if (!state.capture) return state;

      console.log("SET_TARGET");
      const { event, target } = action.payload;

      resetSelection(state);

      state.components.target = target;

      if (target) {
        state.components.target.classList.add("selected");
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
    components: {
      area: useRef(null),
      cursor: useRef(null),
      source: null,
      target: null,
    },
    value: null,
  });

  const valueState = useMemo(() => state, [state.value]);

  return (
    <DragDispatchContext.Provider value={dispatch}>
      <DragStateContext.Provider value={valueState}>
        <WrappedComponent {...props} />
      </DragStateContext.Provider>
    </DragDispatchContext.Provider>
  );
};

// -------------------------------------------------------------------------- //
