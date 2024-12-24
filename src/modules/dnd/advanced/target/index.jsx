import React, { useMemo, useRef } from "react";
import { useArea } from "@lib-react-bricks/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// HOC - to accept and handle drag source components inside it.
// -------------------------------------------------------------------------- //

export const withTarget = (WrappedComponent) => (props) => {
  console.debug("render Target HOC");

  const {
    className,
    id,
    style,
    onDragOver = (evt) => {},
    onDrop = (evt) => {},
    ...restProps
  } = props;

  const ctxArea = useArea(null);

  const ref = useRef(null);

  const handleDragOver = (event) => {
    ref.current.classList.add("selected");
    onDragOver(event);
  };

  const handleDrop = (event) => {
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
      <WrappedComponent {...restProps} />
    </div>
  );
};

// -------------------------------------------------------------------------- //
