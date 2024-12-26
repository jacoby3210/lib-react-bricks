import React, { useRef, useCallback } from "react";
import { Core } from "@lib-react-bricks/src/modules/core";
import { useArea } from "@lib-react-bricks/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// Component - to represent a possible value, to be set in Target by dnd ui.
// -------------------------------------------------------------------------- //

const { useValueBase } = Core.Basics.HOCs;

export const Drag = (props) => {
  const { children, className, id, style } = props;
  console.debug("render Source", id);

  const ctxArea = useArea(null);
  const ctxValueBase = useValueBase();
  const { value } = ctxValueBase.state;
  const ref = useRef(null);

  const handleMouseDown = useCallback(() => {
    ctxArea.dispatch({ type: "CAPTURE", payload: { ref, value } });
  });

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
