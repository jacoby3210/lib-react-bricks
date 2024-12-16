import React, { useEffect } from "react";
import { useDragState } from "@lib-react-bricks/src/modules/dnd/advanced";
import { getEdge } from "./utils";

// -------------------------------------------------------------------------- //
// Component - that can be dragged in Area.
// -------------------------------------------------------------------------- //

export const Cursor = (props) => {
  console.log("render Cursor");

  const { children, className, id, style } = props;

  const capture = useDragState((ctx) => ctx.capture);
  const components = useDragState((ctx) => ctx.components);
  const { area, cursor, source, target } = components;

  useEffect(() => {
    if (!capture || source.current == null) return;
    const child = source.current.cloneNode(true);
    cursor.current.appendChild(child);

    return () => {
      if (cursor.current) cursor.current.innerHTML = "";
    };
  }, [capture]);

  return (
    <div id={id} className={className} ref={cursor} style={style}>
      {children}
    </div>
  );
};

// -------------------------------------------------------------------------- //
