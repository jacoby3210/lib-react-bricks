import React, { useEffect, useRef } from "react";
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

  useEffect(() => {
    const handleCustomEvent = (event) => {
      ctxValueBase.dispatch({
        type: "CHANGE",
        payload: { next: event.detail.value },
      });
      dispatcher({ type: "RELEASE" });
    };

    ref.current.addEventListener("drop", handleCustomEvent);

    return () => {
      ref.current.removeEventListener("drop", handleCustomEvent);
    };
  }, [value]);

  const handleMouseEnter = () => {
    dispatcher({ type: "UPDATE_TARGET", payload: { ref } });
  };

  const handleMouseLeave = () => {
    dispatcher({ type: "UPDATE_TARGET", payload: {} });
  };

  const updateProps = {
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
