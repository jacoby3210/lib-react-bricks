import React, {useCallback, useEffect, useRef, useState } from 'react';
import { Slider } from '/src/gui/layouts';
import * as code from './code';
import * as cfg from "./config"
// ------------------------------------------------------------------------- //
// React Component represents universal customizable content scrollbar.
// ------------------------------------------------------------------------- //

export const Component = props => {

	// initial data.
	const {
		mode,
		target,
		value,
		...attributes
	} = props;
	const axisProps = attributes.axis ? code.horizontalProps : code.verticalProps;

	useEffect(() => {
		target.current.addEventListener("scroll", (e) => {
			const newValue = code.valueFromPosition(target.current, props);
			return whenValueChange(newValue); 
		})
	}, [value]);

	// inputs
	const whenValueChange = useCallback(value => {
		const area = target.current, 
			scrollParams = {top: area.scrollTop, left: area.scrollLeft, mode};
		  scrollParams[axisProps.scrollDirect] = code.valueToPosition(area, axisProps, value);
		  area.scrollTo(scrollParams);
	}, []);

	// render
	const sliderProps = {min: 0.0, max: 1.0, value, whenValueChange}
	return (<Slider.Component {...props}  {...sliderProps} />);
};

Component.propTypes = cfg.propTypes;
export const Scroll = {cfg, Component}

// ------------------------------------------------------------------------- //