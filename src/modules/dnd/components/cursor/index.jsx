import React, { useEffect, useRef } from "react";
import { useArea } from "@lib-react-bricks/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// Component - to display dragging an item on the canvas.
// -------------------------------------------------------------------------- //

export const Cursor = (props) => {
  const { id, className } = props;

  const ctxArea = useArea();
  const drag = useRef(null);

  useEffect(() => {});

  return (
    <div id={id} className={className}>
      {}
    </div>
  );
};

// -------------------------------------------------------------------------- //
