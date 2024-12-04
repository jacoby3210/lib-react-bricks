import { useCallback, useEffect, useRef, useState} from 'react';
import { resolvePropertyAxis } from '@lib-react-bricks/src/modules/core/utils';
import { useValueDigital } from '@lib-react-bricks/src/modules/core/advanced';
import * as code from './utils';

// -------------------------------------------------------------------------- //
// Layout - to select a value from the suggested numeric range.
// -------------------------------------------------------------------------- //

export const Range = props => {
  
  const {
    id, 
    className, 
    axis
  } = props;

  const resolveAxis = resolvePropertyAxis(axis)

  const ctxValueDigital = useValueDigital();

  const thumbRef = useRef(null), trackRef = useRef(null);
  const cursorOffsetRef = useRef(0);
  
  const handleChange = (next) => {
    ctxValueDigital.dispatch({type: 'CHANGE', payload: {next}});
  };

  const handleMouseMove = (evt) => {
    const rect = trackRef.current.getBoundingClientRect();
    handleChange(code.offsetToValue(evt, cursorOffsetRef.current, rect, resolveAxis, ctxValueDigital.state));
  }

  const handleThumbMouseDown = useCallback(
    (evt) => {
      if (evt.button !== 0) return;

      const rect = evt.currentTarget.getBoundingClientRect();
      cursorOffsetRef.current = evt[resolveAxis.cursor] - rect[resolveAxis.rectOffset];

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      evt.stopPropagation();
    }, [] 
  );

  const handleTrackMouseDown = useCallback(
    (evt) => {
      if (evt.buttons !== 1) return;
      const rect = trackRef.current.getBoundingClientRect();
      const newValue = code.offsetToValue(evt, 0, rect, resolveAxis, ctxValueDigital.state);
      code.valueAnimate(ctxValueDigital.state.value, newValue, 200, handleChange);
    }, 
    []
  );

  const handleMouseUp = useCallback(
    (evt) => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }, 
    []
  );

  useEffect(() => {return () => {handleMouseUp()};}, []);

  useEffect(
    () => handleChange(ctxValueDigital.state.value), 
    [ctxValueDigital.state.value]
  );

  const thumbProps = {
    className,
    onMouseDown: handleThumbMouseDown,
    style: code.valueToStyle(axis, ctxValueDigital.state)
  }

  const trackProps = {
    className,
    onMouseDown: handleTrackMouseDown,
  }
  
  return (
    <div id={id} className={className} axis={resolveAxis.axis} value={ctxValueDigital.state.value}>
      <code.RangeTrack ref={trackRef} {...trackProps}>
        <code.RangeThumb ref={thumbRef} {... thumbProps} />
      </code.RangeTrack>
      <span>{ctxValueDigital.state.value}</span>
    </div>
  );
};

// -------------------------------------------------------------------------- //