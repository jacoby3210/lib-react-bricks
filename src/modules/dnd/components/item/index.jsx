import React, { useEffect, useRef, useState } from "react";
import { useDnD } from "@lib-react-bricks/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// Component - that can be dragged in Area.
// -------------------------------------------------------------------------- //

export const Item = (props) => {
  const { children, className, id, style } = props;

  const dispatch = useDnD((ctx) => ctx.dispatch);

  const source = useRef(null);

  const handleMouseDown = (event) => {
    dispatch({ type: "CAPTURE", payload: { event } });
  };

  console.log("render Item");

  return (
    <div
      id={id}
      className={className}
      ref={source}
      style={style}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
};

// -------------------------------------------------------------------------- //
