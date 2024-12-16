import React, { useEffect } from "react";
import { useDragState } from "@lib-react-bricks/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// Component - that can be dragged in Area.
// -------------------------------------------------------------------------- //

export const Cursor = (props) => {
  console.log("render Cursor");

  const { children, className, id, style } = props;

  const capture = useDragState((ctx) => ctx.capture);
  const cursor = useDragState((ctx) => ctx.components.cursor);

  useEffect(() => {}, [capture]);

  return (
    <div id={id} className={className} ref={cursor} style={style}>
      {children}
    </div>
  );
};

// -------------------------------------------------------------------------- //
