import { useArea } from "@lib-react-bricks/src/modules/dnd/advanced";
import { useRef } from "react";
import { useEffect } from "react";

// -------------------------------------------------------------------------- //
// Widget - which manage the area, with dnd ui components.
// -------------------------------------------------------------------------- //

export const Area = (props) => {
  console.debug("render Area");

  const { children, className, id, ...rest } = props;

  const ctxArea = useArea(null);
  const ref = useRef(null);

  useEffect(() => {
    ctxArea.dispatch({ type: "SET_AREA", payload: { ref } });
  }, [ref.current]);

  return (
    <div id={id} className={className} ref={ref} {...rest}>
      {children}
    </div>
  );
};

// -------------------------------------------------------------------------- //
