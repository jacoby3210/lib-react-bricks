import React, { useEffect, useRef, useState } from "react";
import { useDragDispatch } from "@lib-react-bricks/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// Component - which can accept and place drag-and-drop components inside it.
// -------------------------------------------------------------------------- //

export const Slot = (props) => {
  console.log("render Slot");
  const { children, className, id, style } = props;

  const slot = useRef(null);
  const dispatch = useDragDispatch();

  const handleMouseEnter = () => {};
  const handleMouseLeave = () => {};

  const updateProps = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  return (
    <div
      id={id}
      className={className}
      ref={slot}
      style={style}
      {...updateProps}
    >
      {children}
    </div>
  );
};

// -------------------------------------------------------------------------- //
