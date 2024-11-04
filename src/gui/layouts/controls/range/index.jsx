import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as gCFG from "@lib-react-bricks/src/gui/config"
import * as code from './code';

// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix: "range"});
gCFG.applyPackage(cfg, gCFG.propPackageValueNumber, {value: 0});
gCFG.applyPackage(cfg, gCFG.propPackageOrientationBase, {axis:false});

// -------------------------------------------------------------------------- //
// Layout - to select a value from the suggested numeric range.
// -------------------------------------------------------------------------- //

const Component = props => {
  
  // initial data

  const {
    id, className, children,
    axis, axisProps, 
    value, valueMode, 
    valueRangeMax: max, valueRangeMin: min, valueSpeed: speed, valueStep: step,
    whenValueChange, whenValueModify,
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

Component.propTypes = cfg.types;
export const Range = {cfg, Component};

// -------------------------------------------------------------------------- //