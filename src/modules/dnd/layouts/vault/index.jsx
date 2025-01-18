import { useRef } from "react";
import { Core } from "/src/modules/core";

// -------------------------------------------------------------------------- //
// Widget - multiply slots, which can accept and place drag component inside.
// -------------------------------------------------------------------------- //

export const Vault = (props) => {
  console.debug("render Vault");

  const { children, className, id, ...rest } = props;

  const ref = useRef(null);

  return (
    <div id={id} className={className} ref={ref} {...rest}>
      {children}
    </div>
  );
};

// -------------------------------------------------------------------------- //
