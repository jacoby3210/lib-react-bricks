import { Core } from "@lib-react-bricks/src/modules/core";
import { Drop } from "../drop";

// -------------------------------------------------------------------------- //
// Component - which can accept and place drag component inside.
// -------------------------------------------------------------------------- //

const { useValueBase } = Core.Basics.HOCs;

export const Slot = (props) => {
  console.debug("render Slot");

  const {
    children,
    onDragEnter = (evt) => {},
    onDragLeave = (evt) => {},
    onDrop = (evt) => {},
    ...rest
  } = props;

  const ctxValueBase = useValueBase();
  const { value } = ctxValueBase.state;

  const handleDragEnter = (event) => {
    onDragEnter(event);
    const { value } = event.detail;
  };

  const handleDragLeave = (event) => {
    onDragLeave(event);
  };

  const handleDrop = (event) => {
    onDrop(event);
    const payload = { next: event.detail.value };
    ctxValueBase.dispatch({ type: "CHANGE", payload });
  };

  const behavior = {
    onDragEnter: handleDragEnter,
    onDragLeave: handleDragLeave,
    onDrop: handleDrop,
  };

  return (
    <Drop {...rest} {...behavior}>
      {value && children}
    </Drop>
  );
};

// -------------------------------------------------------------------------- //
