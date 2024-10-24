import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as cfg from "./config"
// ========================================================================= //
// React Component - switching of displayed slide in the viewing area by linear order. 
// ========================================================================= //

export const Component = props => {

	// initial data
	const {
		children,
		id,
    rootRef,
		infinity,
		value, valueStep, valueMin, valueMax, valueSpeed, 
		whenValueChange, whenValueModify,
		...attributes
	} = props;

  // input from user
	const normalizeValue = (value) => 
		infinity 
		? (value + valueMax) % (valueMax) 
		: Math.min(value, valueMax - 1);

	// render 
	const btnFirstProps = {
		className: `${cfg.CSS_CLASS_DEFAULT}-first`,
		onClick: () => { whenValueChange(0); },
		disabled: value === 0,
	}
	const btnPrevProps = {
		className: `${cfg.CSS_CLASS_DEFAULT}-first`,
		onClick: () => { whenValueChange(normalizeValue(value - 1)); },
		disabled: value === 0 && !infinity,
	}
	const btnNextProps = {
		className: `${cfg.CSS_CLASS_DEFAULT}-next`,
		onClick: () => {whenValueChange(normalizeValue(value + 1))},
		disabled: value === valueMax - 1 && !infinity,
	}
	const btnLastProps = {
		className: `${cfg.CSS_CLASS_DEFAULT}-last`,
		onClick: () => { whenValueChange(valueMax - 1); },
		disabled: value === valueMax - 1,
	}

	return (
		<>
			<button {...btnFirstProps} >
				<i className={'fa-solid fa-angle-double-left'}></i>
			</button>
			<button {...btnPrevProps}>
				<i className={'fa-solid fa-angle-left'}></i>
			</button>
			<button {...btnNextProps}>
				<i className={'fa-solid fa-angle-right'}></i>
			</button>
			<button {...btnLastProps}>
				<i className={'fa-solid fa-angle-double-right'}></i>
			</button>
		</>
	);
	
};

Component.propTypes = cfg.propTypes;
export const Navigator = {cfg, Component}

// ========================================================================= //