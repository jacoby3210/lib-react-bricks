import React, { useEffect, useRef, useState } from 'react';
import * as code from './code';
import * as cfg from "./config"
// ------------------------------------------------------------------------- //
// React Component to select a value from the suggested numeric range.
// ------------------------------------------------------------------------- //

const Component = props => {

  // initial data
  const {
    id, className,
    axis, value, valueMode, valueRangeMax, valueRangeMin, valueSpeed, valueStep,
    whenValueChange,
    whenValueModify,
    ...attributes
  } = props;
  const propsAxis = axis ? code.horizontalProps : code.verticalProps;

  // hooks.
  const trackRef = useRef(null), thumbRef = useRef(null);
  const [captureState, setCaptureState] = useState(false);
  const [offsetState, setOffsetState] = useState(0);

  useEffect(() => {
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      setCaptureState(false);
    };
    if (captureState) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
  }, [captureState]);
  useEffect(() => {handleChange(value);}, [value]);
  
  // input from user
  const handleChange = (next) => whenValueChange(next, value);
  
  const handleMouseMove = (evt) => {
    const rect = trackRef.current.getBoundingClientRect();
    const relativePos = code.getPosition(rect, propsAxis, evt[propsAxis.cursor], offsetState);
    const newValue = code.positionToValue(relativePos, valueRangeMin, valueRangeMax, valueStep)
    handleChange(newValue);
    evt.preventDefault();
  };
  
  const handleThumbMouseDown = (evt) => {
    if (evt.buttons !== 1) return;
    const rect = evt.currentTarget.getBoundingClientRect();
    setOffsetState(evt[propsAxis.cursor] - rect[propsAxis.offset]);
    setCaptureState(true);
    evt.stopPropagation();
  };
  
  const handleTrackMouseDown = (evt) => {
    if (evt.buttons !== 1) return;
    const rect = trackRef.current.getBoundingClientRect();
    const relativePos = code.getPosition(rect, propsAxis, evt[propsAxis.cursor], 0);
    const newValue = code.positionToValue(relativePos, valueRangeMin, valueRangeMax, valueStep);
    code.valueAnimate(value, newValue, 200, handleChange);
  }

  // render 
  const thumbStyle = code.valueToStyle(axis, value, valueRangeMin, valueRangeMax);
  const trackProps = {className, trackRef, onMouseDown: handleTrackMouseDown };
  const thumbProps = {className, thumbRef, style: thumbStyle, onMouseDown: handleThumbMouseDown };

  return (
    <div
      id={id} className={`${className}`}
      axis={propsAxis.axis} value={value} {...attributes}
    >
      <code.RangeTrack {...trackProps}>
        <code.RangeThumb {...thumbProps} />
      </code.RangeTrack >
      <span>{value}</span>
    </div>
  );
};

Component.propTypes = cfg.propTypes;
export const Range = {cfg, Component};

// ------------------------------------------------------------------------- //