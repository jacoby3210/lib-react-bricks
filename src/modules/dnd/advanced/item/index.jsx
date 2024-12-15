import React, { useRef } from "react";
import {
  createSmartContext,
  useReducerAsContext,
} from "@lib-react-bricks/src/modules/utils";

// -------------------------------------------------------------------------- //
// A feature - to manage data that is bound to Item component.
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// Context and Reducer setup
// -------------------------------------------------------------------------- //

const reducer = (state, action) => {
  switch (action.type) {
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const { ItemContext, useItem } = createSmartContext("Item");
export { useItem };

// -------------------------------------------------------------------------- //
// HOC implementation
// -------------------------------------------------------------------------- //

export const withItem = (WrappedComponent) => (props) => {
  const { data, ...rest } = props;
  const ctx = useReducerAsContext(reducer, { data });

  return (
    <ItemContext.Provider value={ctx}>
      <WrappedComponent {...rest} />
    </ItemContext.Provider>
  );
};
// -------------------------------------------------------------------------- //
