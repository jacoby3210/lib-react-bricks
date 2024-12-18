import React, { useEffect, useRef, useState } from "react";
import { useDragDispatch } from "@lib-react-bricks/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// Component - which can accept and place drag-and-drop components inside it.
// -------------------------------------------------------------------------- //

export const Target = (props) => {
  console.log("render Slot");
  const { children, className, id, style } = props;

  const target = useRef(null);
  const dispatch = useDragDispatch();

  const handleMouseEnter = () => {
    dispatch({ type: "SET_TARGET", payload: { event, target } });
  };

  const handleMouseLeave = () => {
    dispatch({ type: "SET_TARGET", payload: { event, target: null } });
  };

  const updateProps = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  return (
    <div
      id={id}
      className={className}
      ref={target}
      style={style}
      {...updateProps}
    >
      {children}
    </div>
  );
};

// -------------------------------------------------------------------------- //
