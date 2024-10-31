import React, { useEffect, useRef, useState } from 'react';
import * as gCFG from "/src/gui/config"
import * as code from './code';

// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix: "range"});
gCFG.applyPackage(cfg, gCFG.propPackageOrientationBase, {axis:false});
gCFG.applyPackage(cfg, gCFG.propPackageValueNumber, {value: 0});

// -------------------------------------------------------------------------- //
// React Component to select a value from the suggested numeric range.
// -------------------------------------------------------------------------- //

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

  // initial props

  const thumbRef = useRef(null), trackRef = useRef(null);
  const [captureState, setCaptureState] = useState(false);
  const [offsetState, setOffsetState] = useState(0);

  // supporting methods

  const calcValueNew = (evt, offset) => {
    const rect = trackRef.current.getBoundingClientRect();
    const relativePos = code.getPosition(rect, propsAxis, evt[propsAxis.cursor], offset);
    const newValue = code.positionToValue(relativePos, valueRangeMin, valueRangeMax, valueStep);
    return newValue;
  }
  
  // input handling

  const handleChange = (nextValue) => whenValueChange(nextValue, value);

  const handleMouseMove = (evt) => handleChange(calcValueNew(evt, offsetState));

  const handleThumbMouseDown = (evt) => {
    if (evt.buttons !== 1) return;
    const rect = evt.currentTarget.getBoundingClientRect();
    setOffsetState(evt[propsAxis.cursor] - rect[propsAxis.offset]);
    setCaptureState(true);
  };

  const handleTrackMouseDown = (evt) => {
    if (evt.buttons !== 1) return;
    const newValue = calcValueNew(evt, 0);
    code.valueAnimate(value, newValue, 200, handleChange);
  };

  const handleMouseUp = () => setCaptureState(false);

  useEffect(() => {
    if (captureState) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [captureState]);

  useEffect(() => { handleChange(value); }, [value]);
 
  // render 

  const thumbStyle = code.valueToStyle(axis, value, valueRangeMin, valueRangeMax);

  return (
    <div id={id} className={className} axis={propsAxis.axis} value={value} {...attributes}>
      <code.RangeTrack trackRef={trackRef} className={className} onMouseDown={handleTrackMouseDown}>
        <code.RangeThumb thumbRef={thumbRef} className={className} style={thumbStyle} onMouseDown={handleThumbMouseDown} />
      </code.RangeTrack>
      <span>{value}</span>
    </div>
  );
};

Component.propTypes = cfg.types;
export const Range = {cfg, Component};

// -------------------------------------------------------------------------- //