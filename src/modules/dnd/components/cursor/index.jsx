import React, { useEffect, useRef } from "react";
import {
  useData,
  useDispatcher,
} from "@lib-react-bricks/src/modules/dnd/advanced";
import { getEdge } from "./utils";

// -------------------------------------------------------------------------- //
// Component - to display the dragging process of the source component
// -------------------------------------------------------------------------- //

export const Cursor = (props) => {
  console.log("render Cursor");

  const { children, className, id, style } = props;

  const dispatcher = useDispatcher();

  const data = useData();
  const { components, value } = data;
  const { area, cursor, source, target } = components;

  const edge = useRef(null);

  useEffect(() => {
    if (value == null) return;
    const child = source.current.cloneNode(true);
    cursor.current.appendChild(child);

    const areaRect = source.current.getBoundingClientRect();
    cursor.current.style.transform = `translate(${areaRect.x}px, ${areaRect.y}px)`;

    const handleMouseMoveInitial = (event) => {
      edge.current = getEdge(components, event);
      document.removeEventListener("mousemove", handleMouseMoveInitial);
      document.addEventListener("mousemove", handleMouseMove);
    };

    const handleMouseMove = ({ pageX, pageY }) => {
      const { left, top, right, bottom } = edge.current;
      const x = Math.min(Math.max(pageX - left, 0), right);
      const y = Math.min(Math.max(pageY - top, 0), bottom);
      cursor.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleMouseUp = () => {
      if (!target.current) {
        dispatcher({ type: "RELEASE" });
        return;
      }

      const e = new CustomEvent("drop", { detail: { value }, bubbles: true });
      target.current.dispatchEvent(e);
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
