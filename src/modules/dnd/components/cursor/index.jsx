import React, { useEffect, useRef } from "react";
import {
  useDragState,
  useDragDispatch,
} from "@lib-react-bricks/src/modules/dnd/advanced";
import { getEdge } from "./utils";

// -------------------------------------------------------------------------- //
// Component - to display the dragging process of the source component
// -------------------------------------------------------------------------- //

export const Cursor = (props) => {
  console.log("render Cursor");

  const { children, className, id, style } = props;

  const dispatch = useDragDispatch();

  const state = useDragState();
  const { components, value } = state;
  const { area, cursor, source } = components;

  const edge = useRef(null);

  useEffect(() => {
    if (value == null) return;
    const child = source.current.cloneNode(true);
    cursor.current.appendChild(child);

    const areaRect = source.current.getBoundingClientRect();
    cursor.current.style.transform = `translate(${areaRect.x}px, ${areaRect.y}px)`;

    const handleMouseMoveInitial = (event) => {
      edge.current = getEdge(area.current, source.current, event);
      document.removeEventListener("mousemove", handleMouseMoveInitial);
      document.addEventListener("mousemove", handleMouseMove);
    };

    const handleMouseMove = ({ pageX, pageY }) => {
      const { left, top, right, bottom } = edge.current;
      const x = Math.min(Math.max(pageX - left, 0), right);
      const y = Math.min(Math.max(pageY - top, 0), bottom);
      cursor.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleMouseUp = () => dispatch({ type: "RELEASE" });

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
