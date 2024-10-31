import React from 'react';
// -------------------------------------------------------------------------- //
// Helper functions.                                                         //
// -------------------------------------------------------------------------- //

// Additional embedded components.
export const RangeTrack = React.forwardRef((receivedProps, ref) => {
  const { children, className,  ...attributes } = receivedProps;
  return (
    <div className={`${className}-track`} ref={ref} {...attributes}> 
      {children}
    </div >
  );
});

export const RangeThumb = React.forwardRef((receivedProps, ref) => {
  const { children, className, ...attributes } = receivedProps;
  return (
    <div className={`${className}-thumb`} ref={ref} {...attributes}/>
  );
});

// Control value.
export const valueAnimate = (start, end, duration, handleUpdateValueState) => {
  let startTime = null;

  const step = timestamp => {
    if (!startTime) startTime = timestamp;
    const progress = (timestamp - startTime) / duration;
    const newValue = start + (end - start) * progress;
    handleUpdateValueState(newValue);

    if (progress < 1) requestAnimationFrame(step);
    else handleUpdateValueState(end);
  };

  requestAnimationFrame(step);
};

export const valueToStyle = (axis, value, min, max) => {
  const style = `${((value - min) / (max - min)) * 100.0}%`
  return axis ? { left: style } : { top: style }
};

// ========================================================================= //