import React, {useCallback, useEffect, useRef, useState } from 'react';
import { Slider } from '/src/gui/layouts';
import * as code from './code';
import * as cfg from "./config"
// -------------------------------------------------------------------------- //
// React Component represents universal customizable content scrollbar.
// -------------------------------------------------------------------------- //

export const Component = props => {

	// initial data.
	const {
		mode,
		target,
    // whenValueChange,
		value,
		...attributes
	} = props;
  
	const axisProps = attributes.axis ? code.horizontalProps : code.verticalProps;
	useEffect(() => {
    target.current.addEventListener("scroll", (e) => {
			const newValue = code.valueFromPosition(target.current, axisProps);
			return whenValueChange(newValue); 
		})
	}, []);

	// inputs
	const whenValueChange = (next, prev) => {
		const area = target?.current;
    if(!area) return;
		const	scrollParams = {top: area.scrollTop, left: area.scrollLeft, mode};
		  scrollParams[axisProps.scrollDirect] = code.valueToPosition(area, axisProps, next);
		area.scrollTo(scrollParams);
    props.whenValueChange(next);
	};

	// render
	const sliderProps = {valueRangeMin: 0.0, valueRangeMax: 1.0, value, whenValueChange}
	return (<Slider.Component {...props}  {...sliderProps} />);
};

Component.propTypes = cfg.propTypes;
export const Scroll = {cfg, Component}

// -------------------------------------------------------------------------- //