import React, { useRef } from "react";
import { Core } from "/src/modules/core";
import { Drop } from "../drop";

// -------------------------------------------------------------------------- //
// Component - which can accept and place drag component inside.
// -------------------------------------------------------------------------- //

const { useValueBase } = Core.Basics.HOCs;

export const Slot = (props) => {
  console.debug("render Slot");

  const {
    children,
    onDragEnter = (evt) => {},
    onDragLeave = (evt) => {},
    onDrop = (evt) => {},
    ...rest
  } = props;

  const ctxValueBase = useValueBase();
  const { value } = ctxValueBase.state;

  const child = useRef(null);
  const handleDragEnter = (event) => {
    onDragEnter(event);
    const { value } = event.detail;
  };

  const handleDragLeave = (event) => {
    onDragLeave(event);
  };

  const handleDrop = (event) => {
    onDrop(event);
    const { ref, value } = event.detail;
    child.current = ref.current;
    const payload = { next: value };
    ctxValueBase.dispatch({ type: "CHANGE", payload });
  };

  const behavior = {
    onDragEnter: handleDragEnter,
    onDragLeave: handleDragLeave,
    onDrop: handleDrop,
  };

  return (
    <Drop {...rest} {...behavior}>
      {value && child.current && (
        <div ref={(node) => node?.appendChild(child.current)} />
      )}
    </Drop>
  );
};

// -------------------------------------------------------------------------- //
