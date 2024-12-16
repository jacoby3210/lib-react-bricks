import React, { useRef } from "react";
import {
  createSmartContext,
  useReducerAsContext,
} from "@lib-react-bricks/src/modules/utils";

// -------------------------------------------------------------------------- //
// A feature - to present common drag & drop context.
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// Context and Reducer setup
// -------------------------------------------------------------------------- //

const reducer = (state, action) => {
  switch (action.type) {
    case "CAPTURE": {
      console.log("CAPTURE");

      console.log(action.payload);
      return { ...state, capture: true };
    }

    case "RELEASE": {
      console.log("RELEASE");

      return { ...state, capture: false };
    }

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const { DnDContext, useDnD } = createSmartContext("DnD");
export { useDnD };

// -------------------------------------------------------------------------- //
// HOC implementation
// -------------------------------------------------------------------------- //

export const withDnD = (WrappedComponent) => (props) => {
  const ctx = useReducerAsContext(reducer, {
    area: useRef(null),
    cursor: useRef(null),
    source: useRef(null),
    target: useRef(null),
  });

  return (
    <DnDContext.Provider value={ctx}>
      <WrappedComponent {...props} />
    </DnDContext.Provider>
  );
};
// -------------------------------------------------------------------------- //
