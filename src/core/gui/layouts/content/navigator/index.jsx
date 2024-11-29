import { useCallback, useEffect, useRef, useState } from 'react';

// -------------------------------------------------------------------------- //
// Widget - to switch of displayed content in the view by linear order. 
// -------------------------------------------------------------------------- //

export const Navigator = props => {

	// initial data

	const {
    className,
    modular, 
    max, 
    step, 
		value, 
		whenValueChange, 
    whenValueModify,
	} = props;

	// render

	const btnFirstProps = {
		className: `${className.split(" ")[0]}-first`,
		onClick: () => { whenValueChange(0); },
		disabled: value === 0,
	}
	const btnPrevProps = {
		className: `${className.split(" ")[0]}-first`,
		onClick: () => { whenValueModify(- step); },
		disabled: value === 0 && !modular,
	}
	const btnNextProps = {
		className: `${className.split(" ")[0]}-next`,
		onClick: () => {whenValueModify(step)},
		disabled: value === max - step && !modular,
	}
	const btnLastProps = {
		className: `${className.split(" ")[0]}-last`,
		onClick: () => {whenValueChange(max - step);},
		disabled: value === max - step,
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


// -------------------------------------------------------------------------- //