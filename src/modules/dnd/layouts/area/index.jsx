import { useEffect } from "react";
import { useDnD } from "@lib-react-bricks/src/modules/dnd/advanced";

// -------------------------------------------------------------------------- //
// Widget - which manage the area, with dnd ui components.
// -------------------------------------------------------------------------- //

export const Area = (props) => {
  const ctx = useDnD();
  const { children, className, id, ...rest } = props;

  useEffect(() => {}, []);

  return (
    <div id={id} className={className} ref={ctx.state.area} {...rest}>
      {children}
    </div>
  );
};

// -------------------------------------------------------------------------- //
