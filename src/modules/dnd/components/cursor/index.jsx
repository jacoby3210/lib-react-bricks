import React, { useRef } from "react";
import { useDnD } from "@lib-react-bricks/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// Component - that can be dragged in Area.
// -------------------------------------------------------------------------- //

export const Cursor = (props) => {
  const { children, className, id, style } = props;
  // const capture = useDnD((ctx) => ctx.state.capture);

  const source = useRef(null);

  console.log("render Cursor");

  return (
    <div id={id} className={className} ref={source} style={style}>
      {children}
    </div>
  );
};

// -------------------------------------------------------------------------- //
