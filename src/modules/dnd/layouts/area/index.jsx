import { useEffect } from "react";
import { useDnD } from "@lib-react-bricks/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// Widget - which manage the area, with dnd ui components.
// -------------------------------------------------------------------------- //

export const Area = (props) => {
  // const area = useDnD((ctx) => ctx.state.area);
  const { children, className, id, ...rest } = props;
  console.log("render Area");

  return (
    <div id={id} className={className} {...rest}>
      {children}
    </div>
  );
};

// -------------------------------------------------------------------------- //
