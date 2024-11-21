import React, {useCallback, useEffect, useRef, useState } from 'react';
import {Range, Swing} from '@lib-react-bricks/src/core/gui/components'

// -------------------------------------------------------------------------- //
// Widget - to scroll the content in the element.
// -------------------------------------------------------------------------- //

export const Scroll = props => {

  // support

  const valueToPosition = (area, props, value) => 
    (area[props.scrollSize] - area[props.elementSize]) * value;
  const toValue = (area, props) => 
    area[props.scrollOffset] / (area[props.scrollSize] - area[props.elementSize]);

	// initial data

	const {axis, axisProps, mode, target, value} = props;

  // input handling

	const whenValueChange = (next, prev) => {
		const area = target?.current;
    if(!area) return;
		const	scrollParams = {top: area.scrollTop, left: area.scrollLeft, mode};
		  scrollParams[axisProps.scrollDirect] = valueToPosition(area, axisProps, next);
		area.scrollTo(scrollParams);
    return props.whenValueChange(next);
	};

  // hooks 

  useEffect(() => {
    const handleScroll = () => {
      const newValue = toValue(target.current, axisProps);
      whenValueChange(newValue);
    };
  
    const area = target.current;
    area.addEventListener("scroll", handleScroll);
  
    return () => {
      area.removeEventListener("scroll", handleScroll);
    };
  }, [target, axisProps, whenValueChange]);

	// render

	const updateProps = {...props, min: 0.0, max: 1.0, value, whenValueChange}
  return (
    <>
      <Range {...updateProps} />
      <Swing {...updateProps} />
    </>
  );

};

// -------------------------------------------------------------------------- //