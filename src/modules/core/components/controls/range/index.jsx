import { useCallback, useEffect, useRef, useState} from 'react';
import { useValueDigital } from '@lib-react-bricks/src/modules/core/advanced';
import { resolveAxis } from '@lib-react-bricks/src/modules/core/utils';
import * as code from './utils';

// -------------------------------------------------------------------------- //
// Layout - to select a value from the suggested numeric range.
// -------------------------------------------------------------------------- //

export const Range = props => {
  
  const ctxValueDigital = useValueDigital();
  
  const [capture, setCapture] = useState(false);

  const {
    id, 
    className, 
    axis
  } = props;

  const axisResolve = resolveAxis(axis);

  const thumbRef = useRef(null), trackRef = useRef(null);
  const cursorOffset = useRef(0);
  
  const handleChange = (next) => {
    ctxValueDigital.dispatch({type: 'RELATIVE', payload: {next}});
  };

  const handleThumbMouseDown = useCallback(
    (evt) => {
      if (evt.button !== 0) return;
      
      const rect = evt.currentTarget.getBoundingClientRect();
      cursorOffset.current = evt[axisResolve.cursor] - rect[axisResolve.rectOffset];
      setCapture(true);

      evt.stopPropagation();
    }, [] 
  );

  const handleTrackMouseDown = useCallback(
    (evt) => {
      if (evt.buttons !== 1) return;
      const rect = trackRef.current.getBoundingClientRect();
      handleChange(code.offsetToValue(evt, 0, rect, axisResolve));
    }, 
    [axisResolve, ctxValueDigital.state.value]
  );

  useEffect(
    () => {

      const handleMouseMove = (evt) => {
        const rect = trackRef.current.getBoundingClientRect();
        handleChange(code.offsetToValue(evt, cursorOffset.current, rect, axisResolve));
      }

      const handleMouseUp = (evt) => setCapture(false);

      if(capture){
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      }
    
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      }
    }, 
    [capture]
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
    <div id={id} className={className} axis={axisResolve.axis} value={ctxValueDigital.state.value}>
      <code.RangeTrack ref={trackRef} {...trackProps}>
        <code.RangeThumb ref={thumbRef} {... thumbProps} />
      </code.RangeTrack>
      <span>{ctxValueDigital.state.value}</span>
    </div>
  );
};

// -------------------------------------------------------------------------- //