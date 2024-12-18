import React, { useRef } from "react";
import { Core } from "@lib-react-bricks/src/modules/core";
import { useDragDispatch } from "@lib-react-bricks/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// Component - to represent a possible value, to be set in Target by dnd ui.
// -------------------------------------------------------------------------- //

const { useValueBase } = Core.Basics.HOCs;

export const Source = (props) => {
  console.log("render Source");

  const { children, className, id, style } = props;

  const dispatch = useDragDispatch();
  const { value } = useValueBase().state;

  const source = useRef(null);

  const handleMouseDown = () => {
    dispatch({ type: "CAPTURE", payload: { source, value } });
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
};

// -------------------------------------------------------------------------- //
