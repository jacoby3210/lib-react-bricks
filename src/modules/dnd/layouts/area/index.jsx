import { useCallback, useEffect } from "react";
import { useArea } from "@lib-react-bricks/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// Widget - which manage the area, with dnd ui components.
// -------------------------------------------------------------------------- //

export const Area = (props) => {
  const ctxArea = useArea();
  const { children } = props;

  const dispatchCustomEvent = (eventName, detail) => {
    const customEvent = new CustomEvent(eventName, { detail });
    window.dispatchEvent(customEvent);
  };

  const handleMouseDown = (e) => {
    dispatchCustomEvent("drag-start", e);
    ctxArea.dispatch({ type: "CAPTURE", payload: { e } });
  };

  const handleMouseMove = (e) => {
    dispatchCustomEvent("drag-process", e);
    ctxArea.dispatch({ type: "MOVE", payload: { e } });
  };

  useEffect(() => {
    const removeHandlers = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    const handleMouseUp = (e) => {
      dispatchCustomEvent("drag-end", e);
      ctxArea.dispatch({ type: "RELEASE", payload: { e } });
      removeHandlers();
    };

    if (ctxArea.state.capture) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      removeHandlers();
    };
  }, [ctxArea.state.capture]);

  return (
    <div ref={ctxArea.state.area} onMouseDown={handleMouseDown}>
      {children}
    </div>
  );
};

// -------------------------------------------------------------------------- //
