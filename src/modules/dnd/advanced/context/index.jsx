import React, { useRef, useReducer, useMemo, useState } from "react";
import { createSmartContext } from "@lib-react-bricks/src/modules/utils";

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
export { DnDContext, useDnD };

// -------------------------------------------------------------------------- //
// HOC implementation
// -------------------------------------------------------------------------- //

export const withDnD = (WrappedComponent) => (props) => {
  const [state, dispatch] = useReducer(reducer, {
    capture: false,
  });
  const contextValue = useMemo(() => ({ state, dispatch }), [dispatch]);

  return (
    <DnDContext.Provider value={contextValue}>
      <WrappedComponent {...props} />
    </DnDContext.Provider>
  );
};

// -------------------------------------------------------------------------- //
