import PropTypes from 'prop-types';
import React, {useCallback, useEffect, useRef, useState } from 'react';
import * as gCFG  from "/src/gui/config"
import { Slider } from '/src/gui/layouts';
import * as code from './code';
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

Component.propTypes = cfg.types;
export const Scroll = {cfg, Component}

// -------------------------------------------------------------------------- //