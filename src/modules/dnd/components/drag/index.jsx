import React, { useRef, useCallback } from "react";
import { Core } from "/src/modules/core";
import { useArea } from "/src/modules/dnd/advanced";

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
    const payload = { ref, value };
    ctxArea.dispatch({ type: "CAPTURE", payload });
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
