import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { Core } from "@lib-react-bricks/src/modules/core";
import { useArea } from "@lib-react-bricks/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// Component - which can accept and place drag-and-drop components inside it.
// -------------------------------------------------------------------------- //

const { useValueBase } = Core.Basics.HOCs;

export const Target = (props) => {
  console.debug("render Target");

  const {
    children,
    className,
    id,
    style,
    onDragOver = (evt) => {},
    onDrop = (evt) => {},
  } = props;

  const ctxArea = useArea(null);
  const ctxValueBase = useValueBase();
  const { value } = ctxValueBase.state;

  const ref = useRef(null);

  const handleDragOver = (event) => {
    const { value } = event.detail;
    ref.current.classList.add("selected");
    onDragOver(event);
  };

  const handleDrop = (event) => {
    const payload = { next: event.detail.value };
    ctxValueBase.dispatch({ type: "CHANGE", payload });
    ctxArea.dispatch({ type: "RELEASE" });
    onDrop(event);
  };

  const handleMouseEnter = () => {
    ctxArea.dispatch({ type: "UPDATE_TARGET", payload: { ref } });
  };

  const handleMouseLeave = () => {
    if (ref?.current) ref.current.classList.remove("selected");
    ctxArea.dispatch({ type: "UPDATE_TARGET", payload: {} });
  };

  const updateProps = useMemo(
    () => ({
      onDragOver: handleDragOver,
      onDrop: handleDrop,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    }),
    [handleDrop, handleMouseEnter, handleMouseLeave]
  );

  return (
    <div id={id} className={className} ref={ref} style={style} {...updateProps}>
      {value && children}
    </div>
  );
};

// -------------------------------------------------------------------------- //
