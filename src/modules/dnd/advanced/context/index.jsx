import React, { useRef, useReducer, useMemo, useState, useEffect } from "react";
import { createSmartContext } from "@lib-react-bricks/src/modules/utils";

// -------------------------------------------------------------------------- //
// A feature - to present common drag dispatch & drag state contexts.
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// Context and Reducer setup
// -------------------------------------------------------------------------- //

const updateTarget = (next, prev) => {
  if (prev?.current) prev.current.classList.remove("selected");
  if (next?.current) next.current.classList.add("selected");
  prev.current = next?.current;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CAPTURE": {
      console.log("CAPTURE");

      const { components } = state;
      const { source, value } = action.payload;
      components.source.current = source.current;
      return { components, value };
    }

    case "RELEASE": {
      console.log("RELEASE");

      const { components, value } = state;
      const { source, target } = components;

      if (target.current) {
        target.current.dispatchEvent(
          new CustomEvent("click", { detail: { value }, bubbles: true })
        );
      }

      source.current = null;
      updateTarget(null, target);

      return { ...state, value: null };
    }

    case "UPDATE_TARGET": {
      console.log("UPDATE_TARGET");

      const { components, value } = state;
      if (!value) return state;

      updateTarget(action.payload.target, components.target);

      return { components, value };
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
      source: useRef(null),
      target: useRef(null),
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
