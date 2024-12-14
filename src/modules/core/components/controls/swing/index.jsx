import { useRef, useEffect } from "react";
import { useValueDigital } from "@lib-react-bricks/src/modules/core/advanced";
import { resolveClassName } from "@lib-react-bricks/src/modules/utils";

// -------------------------------------------------------------------------- //
// Control - to manage the increase/decrease of the digital value.
// -------------------------------------------------------------------------- //

export const Swing = (props) => {
  const ctxValueDigital = useValueDigital();
  const { max, min, step } = ctxValueDigital.state;
  const { className } = props;
  const timeout = useRef(null);

  const isButtonStart = (btn) => btn.classList.contains(`${className}-start`);

  const onDoubleClick = (evt) => {
    const next = isButtonStart(evt.target) ? min : max;
    ctxValueDigital.dispatch({ type: "CHANGE", payload: { next } });
  };

  const onMouseDownSlice = (modifier) => {
    ctxValueDigital.dispatch({ type: "MODIFY", payload: { modifier } });
  };

  const onMouseDown = (evt) => {
    if (evt.detail !== 1) return;

    const normStep = step * (isButtonStart(evt.target) ? -1 : 1);
    const fn = () => onMouseDownSlice(normStep);

    fn();
    timeout.current = setInterval(fn, 100);

    const clearMouseUp = () => {
      if (timeout.current) clearInterval(timeout.current);
      timeout.current = null;
      document.removeEventListener("mouseup", clearMouseUp);
    };

    document.addEventListener("mouseup", clearMouseUp);
  };

  useEffect(() => {
    return () => {
      if (timeout.current) clearInterval(timeout.current);
    };
  }, []);

  const buttonProps = { onDoubleClick, onMouseDown };

  return (
    <>
      <button
        className={resolveClassName(className, "start")}
        {...buttonProps}
      />
      <button className={resolveClassName(className, "end")} {...buttonProps} />
    </>
  );
};

// -------------------------------------------------------------------------- //
