import React from 'react';
import { resolveClassName } from '@lib-react-bricks/src/modules/core/utils';

// -------------------------------------------------------------------------- //
// Additional embedded components.
// -------------------------------------------------------------------------- //

export const RangeTrack = React.forwardRef((receivedProps, ref) => {

  const { children, className,  ...attributes } = receivedProps;

  return (
    <div 
      className={resolveClassName(className, `track`)} 
      ref={ref} 
      {...attributes}
    > 
      {children}
    </div >
  );

});

export const RangeThumb = React.forwardRef((receivedProps, ref) => {

  const { children, className, ...attributes } = receivedProps;
  
  return (
    <div 
      className={resolveClassName(className, `thumb`)} 
      ref={ref} 
      {...attributes}
    />
  );

});

// -------------------------------------------------------------------------- //
// Helper functions.
// -------------------------------------------------------------------------- //

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

export const valueToStyle = (axis, {value, min, max}) => {

  const style = `${((value - min) / (max - min)) * 100.0}%`
  return axis ? { left: style } : { top: style }

};


export const offsetToValue = (evt, offset, rect, resolveAxis, state) => {
  
  const {cursor, rectOffset, rectSize} = resolveAxis;
  const absolutePos = evt[cursor] - rect[rectOffset] - offset;
  const relativePos = Math.max(0, Math.min(1, absolutePos / rect[rectSize]));
  return relativePos;

}

// -------------------------------------------------------------------------- //