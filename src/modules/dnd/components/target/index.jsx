import React, { useEffect, useRef, useState } from "react";
import { Core } from "@lib-react-bricks/src/modules/core";
import { useDispatcher } from "@lib-react-bricks/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// Component - which can accept and place drag-and-drop components inside it.
// -------------------------------------------------------------------------- //

const { useValueBase } = Core.Basics.HOCs;

export const Target = (props) => {
  console.log("render Target");

  const { children, className, id, style, onChange = (evt) => {} } = props;

  const dispatcher = useDispatcher();
  const ctxValueBase = useValueBase();
  const { value } = ctxValueBase.state;

  const ref = useRef(null);

  const handleClick = (e) => {
    console.log(e);
    // ctxValueBase.dispatch({
    //   type: "CHANGE",
    //   payload: { next: e.detail.value },
    // });
  };

  const handleMouseEnter = () => {
    dispatcher({ type: "UPDATE_TARGET", payload: { ref } });
  };

  const handleMouseLeave = () => {
    dispatcher({ type: "UPDATE_TARGET", payload: {} });
  };

  const updateProps = {
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  return (
    <div id={id} className={className} ref={ref} style={style} {...updateProps}>
      {value && children}
    </div>
  );
};

// -------------------------------------------------------------------------- //
