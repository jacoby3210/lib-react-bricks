import React, { useContext, useEffect, useRef, useState } from "react";
import { Core } from "@lib-react-bricks/src/modules/core";
import { useDragDispatch } from "@lib-react-bricks/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// Component - that can be dragged in Area.
// -------------------------------------------------------------------------- //

const { useValueBase } = Core.Basics.HOCs;

export const Source = React.memo((props) => {
  // console.log("render Source");

  const { children, className, id, style } = props;

  const ctxValueBase = useValueBase();
  const { value } = ctxValueBase.state;

  const source = useRef(null);

  const dispatch = useDragDispatch();
  const handleMouseDown = (event) => {
    dispatch({ type: "CAPTURE", payload: { event, source, value } });
  };

  return (
    <div
      id={id}
      className={className}
      ref={source}
      style={style}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
});

// -------------------------------------------------------------------------- //
