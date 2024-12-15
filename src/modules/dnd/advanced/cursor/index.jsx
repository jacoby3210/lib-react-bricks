import React, { useRef } from "react";
import {
  createSmartContext,
  useReducerAsContext,
} from "@lib-react-bricks/src/modules/utils";

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

const { CursorContext, useCursor } = createSmartContext("Cursor");
export { useCursor };

// -------------------------------------------------------------------------- //
// HOC implementation
// -------------------------------------------------------------------------- //

export const withCursor = (WrappedComponent) => (props) => {
  const ctx = useReducerAsContext(reducer, {
    capture: false,
  });

  return (
    <CursorContext.Provider value={ctx}>
      <WrappedComponent {...props} />
    </CursorContext.Provider>
  );
};
// -------------------------------------------------------------------------- //
