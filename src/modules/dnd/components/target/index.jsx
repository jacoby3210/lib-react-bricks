import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { Core } from "@lib-react-bricks/src/modules/core";
import { useDispatcher } from "@lib-react-bricks/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// Component - which can accept and place drag-and-drop components inside it.
// -------------------------------------------------------------------------- //

const { useValueBase } = Core.Basics.HOCs;

export const Target = (props) => {
  console.log("render Target");

  const { children, className, id, style, onDrop = (evt) => {} } = props;

  const dispatcher = useDispatcher();
  const ctxValueBase = useValueBase();
  const { value } = ctxValueBase.state;

  const ref = useRef(null);

  const handleMouseEnter = useCallback(() => {
    dispatcher({ type: "UPDATE_TARGET", payload: { ref } });
  }, [dispatcher]);

  const handleMouseLeave = useCallback(() => {
    dispatcher({ type: "UPDATE_TARGET", payload: {} });
  }, [dispatcher]);

  const handleDrop = useCallback(
    (event) => {
      const payload = { next: event.detail.value };
      ctxValueBase.dispatch({ type: "CHANGE", payload });
      dispatcher({ type: "RELEASE" });
      onDrop(event);
    },
    [ctxValueBase, dispatcher, onDrop]
  );

  const updateProps = useMemo(
    () => ({
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
