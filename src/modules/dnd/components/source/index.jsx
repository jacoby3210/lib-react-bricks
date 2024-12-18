import React, { useContext, useEffect, useRef, useState } from "react";
import { useDragDispatch } from "@lib-react-bricks/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// Component - that can be dragged in Area.
// -------------------------------------------------------------------------- //

export const Source = React.memo((props) => {
  console.log("render Item");

  const { children, className, id, style } = props;

  const source = useRef(null);

  const dispatch = useDragDispatch();
  const handleMouseDown = (event) => {
    dispatch({ type: "CAPTURE", payload: { event, source } });
  };

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
});

// -------------------------------------------------------------------------- //
