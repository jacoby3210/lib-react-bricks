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
  const { components, value } = state;
  const { area, cursor, source, target } = components;

  switch (action.type) {
    case "CAPTURE": {
      const { ref, value } = action.payload;
      source.current = ref.current;
      return { components, value };
    }

    case "RELEASE": {
      if (target.current) {
        const e = new CustomEvent("click", {
          detail: { value },
          bubbles: true,
        });
        target.current.dispatchEvent(e);
      }

      source.current = null;
      updateTarget(null, target);

      return { components, value: null };
    }

    case "UPDATE_TARGET": {
      if (!value) return state;
      updateTarget(action.payload.ref, target);
      return { components, value };
    }

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const { DispatcherContext, useDispatcher } = createSmartContext("Dispatcher");
const { DataContext, useData } = createSmartContext("Data");
export { useData, useDispatcher };

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

  const stateMemo = useMemo(() => state, [state.value]);

  return (
    <DispatcherContext.Provider value={dispatch}>
      <DataContext.Provider value={stateMemo}>
        <WrappedComponent {...props} />
      </DataContext.Provider>
    </DispatcherContext.Provider>
  );
};

// -------------------------------------------------------------------------- //
