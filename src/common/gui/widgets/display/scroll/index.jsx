import React, {useCallback, useEffect, useRef, useState } from 'react';
import {Range, Swing} from '@lib-react-bricks/src/common/gui/layouts'

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

  // hooks 

	useEffect(() => {
    target.current.addEventListener("scroll", (e) => {
			const newValue = toValue(target.current, axisProps);
			return whenValueChange(newValue); 
		})
	}, []);

  // input handling

	const whenValueChange = (next, prev) => {
		const area = target?.current;
    if(!area) return;
		const	scrollParams = {top: area.scrollTop, left: area.scrollLeft, mode};
		  scrollParams[axisProps.scrollDirect] = valueToPosition(area, axisProps, next);
		area.scrollTo(scrollParams);
    return props.whenValueChange(next);
	};

	// render

	const sliderProps = {valueRangeMin: 0.0, valueRangeMax: 1.0, value, whenValueChange}
  return (
    <>
      <Range {...props}  {...sliderProps} />
      <Swing {...props}  {...sliderProps} />
    </>
  );

};

// -------------------------------------------------------------------------- //