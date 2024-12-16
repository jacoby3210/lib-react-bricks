import React, { useEffect, useRef, useState } from "react";
import { useDnD } from "@lib-react-bricks/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// Component - that can be dragged in Area.
// -------------------------------------------------------------------------- //

export const Item = (props) => {
  const { children, className, id, style } = props;
  const ctxDnD = useDnD();

  const handleMouseDown = (event) => {
    ctxDnD.dispatch({ type: "CAPTURE", payload: { event } });
  };

  return (
    <div
      id={id}
      className={className}
      style={style}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
};

// -------------------------------------------------------------------------- //
