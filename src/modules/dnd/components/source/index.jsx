import React, { useRef, useCallback } from "react";
import { Core } from "@lib-react-bricks/src/modules/core";
import { useArea } from "@lib-react-bricks/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// Component - to represent a possible value, to be set in Target by dnd ui.
// -------------------------------------------------------------------------- //

export const Source = (props) => {
  const { children, className, id, style, value } = props;
  console.debug("render Source", id);

  const { dispatch } = useArea(null);
  const ref = useRef(null);

  const handleMouseDown = useCallback(() => {
    dispatch({ type: "CAPTURE", payload: { ref, value } });
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
