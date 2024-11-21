import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as code from './utils';

// -------------------------------------------------------------------------- //
// Layout - to select a value from the suggested numeric range.
// -------------------------------------------------------------------------- //

export const Range = props => {
  
  // initial data

  const {
    id, className, 
    children,
    axis, axisProps, 
    value, 
    max, 
    min, 
    step,
    whenValueChange, 
    whenValueModify,
  } = props;

  // supporting methods

  const calcValueNew = (evt, offset) => {
    const rect = trackRef.current.getBoundingClientRect();
    const clientOffset = evt[axisProps.cursor]; 
    const absolutePos = clientOffset - rect[axisProps.rectOffset] - offset;
    const relativePos = Math.max(0, Math.min(1, absolutePos / rect[axisProps.rectSize]));
    const newValue = min + Math.round((relativePos * (max - min)) / step) * step;
    return newValue;
  }

  // hooks

  const thumbRef = useRef(null), trackRef = useRef(null);
  const [offsetState, setOffsetState] = useState(0);
  
  // input handling

  const handleChange = (nextValue) => whenValueChange(nextValue, value);

  const handleMouseMove = (evt) => handleChange(calcValueNew(evt, offsetState));

  const handleThumbMouseDown = useCallback(
    (evt) => {
      if (evt.button !== 0) return;
      const rect = evt.currentTarget.getBoundingClientRect();
      setOffsetState(evt[axisProps.cursor] - rect[axisProps.rectOffset]);
  
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }, [] 
  );

  const handleTrackMouseDown = useCallback(
    (evt) => {
      if (evt.buttons !== 1) return;
      const newValue = calcValueNew(evt, 0);
      code.valueAnimate(value, newValue, 200, handleChange);
    }, []
  );

  const handleMouseUp = useCallback(
    (evt) => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }, []
  );

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  useEffect(() => { handleChange(value); }, [value]);

  // render 

  const thumbStyle = code.valueToStyle(axis, value, min, max);

  return (
    <div id={id} className={className} axis={axisProps.axis} value={value}>
      <code.RangeTrack ref={trackRef} className={className} onMouseDown={handleTrackMouseDown}>
        <code.RangeThumb ref={thumbRef} className={className} style={thumbStyle} onMouseDown={handleThumbMouseDown} />
      </code.RangeTrack>
      <span>{value}</span>
    </div>
  );
};

// -------------------------------------------------------------------------- //