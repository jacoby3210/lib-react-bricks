import { useCallback, useEffect } from "react";
import { useArea } from "@lib-react-bricks/src/modules/dnd/advanced";
import { Cursor } from "@lib-react-bricks/src/modules/dnd/components";

// -------------------------------------------------------------------------- //
// Widget - which manage the area, with dnd ui components.
// -------------------------------------------------------------------------- //

export const Area = (props) => {
  const ctxArea = useArea();
  const { children, className, id, ...rest } = props;

  const dispatchCustomEvent = (eventName, detail) => {
    const customEvent = new CustomEvent(eventName, { detail });
    window.dispatchEvent(customEvent);
  };

  // const handleMouseDown = (e) => {
  //   dispatchCustomEvent("drag-start", e);
  //   ctxArea.dispatch({ type: "CAPTURE", payload: { e } });
  // };

  useEffect(() => {
    const removeHandlers = () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };

    const handleMouseUp = (e) => {
      dispatchCustomEvent("drag-end", e);
      ctxArea.dispatch({ type: "RELEASE", payload: { e } });
    };

    if (ctxArea.state.capture) {
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      removeHandlers();
    };
  }, [ctxArea.state.capture]);

  return (
    <div id={id} className={className} ref={ctxArea.state.area} {...rest}>
      {children}
      {ctxArea.state.capture ? <Cursor /> : null}
    </div>
  );
};

// -------------------------------------------------------------------------- //
