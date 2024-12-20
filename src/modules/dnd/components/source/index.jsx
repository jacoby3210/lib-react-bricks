import React, { useRef } from "react";
import { Core } from "@lib-react-bricks/src/modules/core";
import { useDispatcher } from "@lib-react-bricks/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// Component - to represent a possible value, to be set in Target by dnd ui.
// -------------------------------------------------------------------------- //

const { useValueBase } = Core.Basics.HOCs;

export const Source = (props) => {
  const { children, className, id, style } = props;
  console.log("render Source", id);

  const dispatcher = useDispatcher();
  const { value } = useValueBase().state;

  const ref = useRef(null);

  const handleMouseDown = () => {
    dispatcher({ type: "CAPTURE", payload: { ref, value } });
  };

  return (
    <div
      id={id}
      className={className}
      ref={ref}
      style={style}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
};

// -------------------------------------------------------------------------- //
