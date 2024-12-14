import React, { useEffect, useRef } from "react";
import { useArea } from "@lib-react-bricks/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// Component - to display dragging an item on the canvas.
// -------------------------------------------------------------------------- //

export const Cursor = (props) => {
  const { id, className = "rc-dnd-cursor" } = props;

  const ctxArea = useArea();
  const { boundary, source } = ctxArea.state;
  const cursor = useRef(null);

  const style = {
    left: "0px",
    top: "0px",
    position: "absolute",
    transform: `translate(0px, 0px)`,
  };

  useEffect(() => {
    const child = source.cloneNode(true);
    cursor.current.appendChild(child);

    const handleMouseMove = (e) => {
      const { pageX: x, pageY: y } = e;
      const { x1, y1, x2, y2 } = boundary;
      const offsetLeft = Math.min(Math.max(x - x1, 0), x2);
      const offsetTop = Math.min(Math.max(y - y1, 0), y2);

      if (cursor.current)
        cursor.current.style.transform = `translate(${offsetLeft}px, ${offsetTop}px)`;
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (cursor.current) cursor.current.innerHTML = "";
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [source]);

  return <div id={id} className={className} ref={cursor} style={style} />;
};

// -------------------------------------------------------------------------- //
