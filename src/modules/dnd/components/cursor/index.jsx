import React, { useEffect, useRef } from "react";
import { triggerEvent } from "@lib-react-bricks/src/modules/utils";
import { useArea } from "@lib-react-bricks/src/modules/dnd/advanced";
import { initCursor, getEdge } from "./utils";

// -------------------------------------------------------------------------- //
// Component - to display the dragging process of the source component
// -------------------------------------------------------------------------- //

export const Cursor = (props) => {
  console.debug("render Cursor");

  const { children, className, id, style } = props;

  const ctxArea = useArea();
  const { components, value } = ctxArea.state;
  const { area, cursor, source, target } = components;

  const edge = useRef(null);

  useEffect(() => {
    if (value == null) return;

    initCursor(components);

    const handleMouseMoveInitial = (event) => {
      edge.current = getEdge(components, event);
      document.removeEventListener("mousemove", handleMouseMoveInitial);
      document.addEventListener("mousemove", handleMouseMove);
    };

    const handleMouseMove = (event) => {
      const { left, top, right, bottom } = edge.current;
      const x = Math.min(Math.max(event.pageX - left, 0), right);
      const y = Math.min(Math.max(event.pageY - top, 0), bottom);
      cursor.current.style.transform = `translate(${x}px, ${y}px)`;

      if (event.target != target.current) {
        if (target.current)
          triggerEvent(target.current, "dragleave", { detail: { value } });
        triggerEvent(event.target, "dragenter", { detail: { value } });
      }
    };

    const handleMouseUp = () => {
      if (!target.current) {
        ctxArea.dispatch({ type: "RELEASE" });
        return;
      }
      triggerEvent(target.current, "drop", { detail: { value } });
    };

    document.addEventListener("mousemove", handleMouseMoveInitial);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      if (cursor.current) cursor.current.innerHTML = "";
      document.removeEventListener("mousemove", handleMouseMoveInitial);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [value]);

  return (
    <div id={id} className={className} ref={cursor} style={style}>
      {children}
    </div>
  );
};

// -------------------------------------------------------------------------- //
