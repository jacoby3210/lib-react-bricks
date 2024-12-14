import React, { useEffect, useRef, useState } from "react";
import { useArea } from "@lib-react-bricks/src/modules/dnd/advanced";
import { Cursor } from "@lib-react-bricks/src/modules/dnd/components";

// -------------------------------------------------------------------------- //
// Component - that can be dragged in Area.
// -------------------------------------------------------------------------- //

export const Item = (props) => {
  const { children, className, id, style } = props;
  const ctxArea = useArea();

  const dispatchCustomEvent = (eventName, detail) => {
    const customEvent = new CustomEvent(eventName, { detail });
    window.dispatchEvent(customEvent);
  };

  const handleMouseDown = (e) => {
    dispatchCustomEvent("drag-start", e);
    ctxArea.dispatch({ type: "CAPTURE", payload: { e } });
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
