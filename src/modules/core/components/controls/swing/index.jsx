import { useRef, useEffect } from 'react';
import { useValueDigital } from '@lib-react-bricks/src/modules/core/advanced';

// -------------------------------------------------------------------------- //
// Layout - to control the increase/decrease of the value.
// -------------------------------------------------------------------------- //

export const Swing = (props) => {
  const { className, step, min, max } = props;
  const ctxValueDigital = useValueDigital();
  const timeoutRef = useRef(null);

  const isButtonStart = (btn) => btn.classList.contains(`${className}-start`);

  const onDoubleClick = (evt) => {
    const {max, min} = ctxValueDigital.state;
    const next = isButtonStart(evt.target) ? min : max;
    ctxValueDigital.dispatch({ type: 'CHANGE', payload: { next } });
  };

  const onMouseDownSlice = (modifier) => {
    ctxValueDigital.dispatch({ type: 'CHANGE', payload: { modifier } });
  };

  const onMouseDown = (evt) => {
    if (evt.detail !== 1) return;

    const normStep = step * (isButtonStart(evt.target) ? -1 : 1);
    const fn = () => onMouseDownSlice(normStep);

    fn();
    timeoutRef.current = setInterval(fn, 100);

    const clearMouseUp = () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
      timeoutRef.current = null;
      document.removeEventListener('mouseup', clearMouseUp);
    };

    document.addEventListener('mouseup', clearMouseUp);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, []);

  const buttonProps = { onDoubleClick, onMouseDown };
  const startProps = { className: `${className}-start`, ...buttonProps };
  const endProps = { className: `${className}-end`, ...buttonProps };

  return (
    <>
      <button {...startProps} />
      <button {...endProps} />
    </>
  );
};


// -------------------------------------------------------------------------- //