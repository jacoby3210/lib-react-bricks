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
  const event = useDragState((ctx) => ctx.event);
  const { area, cursor, source, target } = components;

  useEffect(() => {
    if (!capture || source.current == null) return;
    const child = source.current.cloneNode(true);
    cursor.current.appendChild(child);

    const edge = getEdge(area.current, source.current, event);
    const { x1, y1, x2, y2 } = edge;

    const handleMouseMove = (e) => {
      const { pageX: x, pageY: y } = e;
      const offsetLeft = Math.min(Math.max(x - x1, 0), x2);
      const offsetTop = Math.min(Math.max(y - y1, 0), y2);

      if (cursor.current)
        cursor.current.style.transform = `translate(${offsetLeft}px, ${offsetTop}px)`;

      // target.current = scan(cursor, e);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (cursor.current) cursor.current.innerHTML = "";
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [capture]);

  return (
    <div id={id} className={className} ref={cursor} style={style}>
      {children}
    </div>
  );
};

// -------------------------------------------------------------------------- //
