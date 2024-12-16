import { useEffect, useRef } from "react";
import { useDragState } from "@lib-react-bricks/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// Widget - which manage the area, with dnd ui components.
// -------------------------------------------------------------------------- //

export const Area = (props) => {
  console.log("render Area");

  const { children, className, id, ...rest } = props;

  const area = useDragState((ctx) => ctx.components.area);

  return (
    <div id={id} className={className} ref={area} {...rest}>
      {children}
    </div>
  );
};

// -------------------------------------------------------------------------- //
