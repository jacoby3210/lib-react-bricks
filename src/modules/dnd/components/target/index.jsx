import React, { useEffect, useRef, useState } from "react";
import { Core } from "@lib-react-bricks/src/modules/core";
import { useDragDispatch } from "@lib-react-bricks/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// Component - which can accept and place drag-and-drop components inside it.
// -------------------------------------------------------------------------- //

const { useValueBase } = Core.Basics.HOCs;

export const Target = (props) => {
  const { children, className, id, style, onChange = (evt) => {} } = props;
  console.log("render Target", id);

  const ctxValueBase = useValueBase();
  const { value } = ctxValueBase.state;

  const target = useRef(null);
  const dispatch = useDragDispatch();

  const handleClick = (e) => {
    console.log(e);
    ctxValueBase.dispatch({
      type: "CHANGE",
      payload: { next: e.detail.value },
    });
  };

  const handleMouseEnter = () => {
    dispatch({
      type: "SET_TARGET",
      payload: { target: target.current },
    });
  };

  const handleMouseLeave = () => {
    dispatch({ type: "SET_TARGET", payload: { target: null } });
  };

  const handleMouseUp = (e) => {
    // e.stopPropagation();
  };

  const updateProps = {
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
  };

  return (
    <div
      id={id}
      className={className}
      ref={target}
      style={style}
      {...updateProps}
    >
      {value && children}
    </div>
  );
};

// -------------------------------------------------------------------------- //
