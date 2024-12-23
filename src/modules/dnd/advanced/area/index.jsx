import React, { useRef, useReducer, useMemo } from "react";
import { Core } from "@lib-react-bricks/src/modules/core";

// -------------------------------------------------------------------------- //
// A feature - to present common drag dispatch & drag state contexts.
// -------------------------------------------------------------------------- //

const updateTarget = (next, prev) => {
  prev.current = next?.current;
};

const { createSmartContext, withContext } = Core.Basics.HOCs;

const ctx = createSmartContext("Area");
export const { useArea } = ctx;

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
      source.current = null;
      target.current = null;

      return { components, value: null };
    }

    case "UPDATE_TARGET": {
      if (!value) return state;
      const { ref } = action.payload;
      target.current = ref?.current;

      return { components, value };
    }

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const resolver = (props) => {
  const state = {
    components: {
      area: useRef(null),
      cursor: useRef(null),
      source: useRef(null),
      target: useRef(null),
    },
    value: null,
  };
  return [state, props];
};

export const withArea = (WrappedComponent) => {
  return withContext(ctx, reducer, resolver)(WrappedComponent);
};

// -------------------------------------------------------------------------- //
