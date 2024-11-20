import React, { useRef, useEffect, useCallback } from 'react';

// -------------------------------------------------------------------------- //
// Layout - to control the increase/decrease of the value.
// -------------------------------------------------------------------------- //

export const Swing = (props) => {

  // initial data

  const {
    className,
    max, min, step,value,
    whenValueChange, whenValueModify,
  } = props;
  const isButtonStart = (btn) => btn.classList.contains(`${className}-start`);

  // hooks

  const timeoutRef = useRef(null);
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, []);

  // input handling

  const onDoubleClick = (evt) => {
    const next = isButtonStart(evt.target) ? min : max;
    whenValueChange(next);
  };

  const onMouseDownSlice = (offset) =>{ 
    console.log(1, offset, value)
    return whenValueModify(offset);
  }
  
  const onMouseDown = useCallback(
    (evt) => {
      
      if (evt.detail !== 1) return;
      const normStep = step * (isButtonStart(evt.target) ? -1 : 1);
      const fn = () => onMouseDownSlice(normStep);
      fn();
      timeoutRef.current = setInterval(fn, 100);
    }, 
    [value]
  );  

  const onMouseUp = () => {
    if (timeoutRef.current) clearInterval(timeoutRef.current);
    timeoutRef.current = null;
  };

  // render

  const buttonProps = { onDoubleClick, onMouseDown, onMouseUp };
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