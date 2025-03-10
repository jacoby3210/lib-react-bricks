import React, { useMemo, useRef } from "react";
import { useArea } from "/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// Component - to accept and handle drag source components inside it.
// -------------------------------------------------------------------------- //

export const Drop = (props) => {
  console.debug("render Drop");

  const {
    children,
    className,
    id,
    style,
    onDragEnter = (evt) => {},
    onDragLeave = (evt) => {},
    onDrop = (evt) => {},
    ...rest
  } = props;

  const ctxArea = useArea(null);

  const ref = useRef(null);

  const handleDragEnter = (event) => {
    console.debug(`fired handleDragEnter ${event.detail.value}`);

    onDragEnter(event);
    ref.current.classList.add("selected");
    ctxArea.dispatch({ type: "UPDATE_TARGET", payload: { ref } });
  };

  const handleDragLeave = (event) => {
    console.debug(`fired handleDragLeave ${id}`);

    onDragLeave(event);
    ctxArea.dispatch({ type: "UPDATE_TARGET", payload: {} });
    ref.current.classList.remove("selected");
  };

  const handleDrop = (event) => {
    console.debug(`fired handleDrop ${id}`);

    onDrop(event);
    ctxArea.dispatch({ type: "RELEASE" });
    ref.current.classList.remove("selected");
  };

  const behavior = {
    onDragEnter: handleDragEnter,
    onDragLeave: handleDragLeave,
    onDrop: handleDrop,
  };

  return (
    <div
      id={id}
      className={className}
      ref={ref}
      style={style}
      {...behavior}
      {...rest}
    >
      {children}
    </div>
  );
};

// -------------------------------------------------------------------------- //
