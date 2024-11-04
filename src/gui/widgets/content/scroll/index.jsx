import PropTypes from 'prop-types';
import React, {useCallback, useEffect, useRef, useState } from 'react';
import * as gCFG  from "@lib-react-bricks/src/gui/config"
import { Slider } from '@lib-react-bricks/src/gui/layouts';

// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix: "scroll"});
gCFG.applyPackage(cfg, gCFG.propPackageOrientationBase, {axis:false});
gCFG.applyPackage(cfg, gCFG.propPackageValueNumber, {value: 0});
gCFG.applyPackage(cfg, {
  types:{
    mode: PropTypes.string,
	  target: PropTypes.object,
  },
  values:{
    mode: "smooth",						// scrolling mode (using by DOM API methods)
    target: null,             // scrolling target element.
  }
}, {value: 0});

// -------------------------------------------------------------------------- //
// Widget - to scroll the content in the element.
// -------------------------------------------------------------------------- //

export const Component = props => {

	// initial data

	const {axis, axisProps, mode, target, value} = props;

  // supporting methods

  const valueToPosition = (area, props, value) => 
    (area[props.scrollSize] - area[props.elementSize]) * value;
  const toValue = (area, props) => 
    area[props.scrollOffset] / (area[props.scrollSize] - area[props.elementSize]);

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
	return (<Slider.Component {...props}  {...sliderProps} />);
};

Component.propTypes = cfg.types;
export const Scroll = {cfg, Component}

// -------------------------------------------------------------------------- //