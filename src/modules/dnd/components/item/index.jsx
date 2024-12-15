import React, { useEffect, useRef, useState } from "react";
import { dispatchCustomEvent } from "@lib-react-bricks/src/modules/utils";
import { useArea, useItem } from "@lib-react-bricks/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// Component - that can be dragged in Area.
// -------------------------------------------------------------------------- //

export const Item = (props) => {
  const { children, className, id, style } = props;
  const ctxArea = useArea();
  const ctxItem = useItem();

  const handleMouseDown = (e) => {
    dispatchCustomEvent({ name: "drag-start", detail: { e, ctxItem } });
    ctxArea.dispatch({ type: "CAPTURE", payload: { e, ctxItem } });
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
