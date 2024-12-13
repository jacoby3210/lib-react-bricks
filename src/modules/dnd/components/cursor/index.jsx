import React, { useEffect, useRef } from "react";
import { useArea } from "@lib-react-bricks/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// Component - to display dragging an item on the canvas.
// -------------------------------------------------------------------------- //

export const Cursor = (props) => {
  const { id, className } = props;

  const ctxArea = useArea();
  const { boundary } = ctxArea.state;
  const cursor = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { pageX: x, pageY: y } = e;
      const { x1, y1, x2, y2 } = boundary;
      const offsetLeft = Math.min(Math.max(x - x1, 0), x2);
      const offsetTop = Math.min(Math.max(y - y1, 0), y2);

      cursor.current.style.transform = `translate(${offsetLeft}px, ${offsetTop}px)`;
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <div id={id} className={className} ref={cursor}>
      {}
    </div>
  );
};

// -------------------------------------------------------------------------- //
