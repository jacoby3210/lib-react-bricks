import React, { useEffect, useRef, useState } from "react";
import { useDnD, useCursor } from "@lib-react-bricks/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// Component - that can be dragged in Area.
// -------------------------------------------------------------------------- //

export const Item = (props) => {
  const { children, className, id, style } = props;
  const ctxDnD = useDnD();
  const ctxCursor = useCursor();

  const handleMouseDown = (e) => {
    ctxCursor.dispatch({ type: "CAPTURE", payload: { ctxDnD } });
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
