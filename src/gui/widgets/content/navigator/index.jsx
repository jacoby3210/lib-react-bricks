import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as cfg from "./config"
// ------------------------------------------------------------------------- //
// React Component - switching of displayed content in the view by linear order. 
// ------------------------------------------------------------------------- //

export const Component = props => {

	// initial data
	const {
		children,
		id, rootRef,
		infinity,
		value, valueStep, valueMin, valueMax, valueSpeed, 
		whenValueChange, whenValueModify,
	} = props;
  console.log(valueMax)
	// render 
	const btnFirstProps = {
		className: `${cfg.CSS_CLASS_DEFAULT}-first`,
		onClick: () => { whenValueChange(0); },
		disabled: value === 0,
	}
	const btnPrevProps = {
		className: `${cfg.CSS_CLASS_DEFAULT}-first`,
		onClick: () => { whenValueModify(- valueStep); },
		disabled: value === 0 && !infinity,
	}
	const btnNextProps = {
		className: `${cfg.CSS_CLASS_DEFAULT}-next`,
		onClick: () => {whenValueModify(valueStep)},
		disabled: value === valueMax - 1 && !infinity,
	}
	const btnLastProps = {
		className: `${cfg.CSS_CLASS_DEFAULT}-last`,
		onClick: () => { whenValueChange(valueMax - valueStep); },
		disabled: value === valueMax - valueStep,
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

// ------------------------------------------------------------------------- //