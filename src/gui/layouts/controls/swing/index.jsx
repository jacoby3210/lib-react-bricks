import {useRef} from 'react'
import * as cfg from './config';
// ------------------------------------------------------------------------- //
// React Component to control the increase/decrease of the value.
// ------------------------------------------------------------------------- //

const Component = props => {

	// initial data
	const {
		className,
		max, min, step, 
		whenValueChange,
		whenValueModify,
	} = props;

	// hooks
	const timeoutRef = useRef(null);
	
	// inputs
	const isButtonStart = (btn) => btn.classList.contains(`${className}-start`);
	const handleMouseDownSlice = (offset) => whenValueModify(offset);
	const onMouseDown = (evt) => {
		if(evt.detail != 1) return;
		const normStep = step * (isButtonStart(evt.target) ? -1 : 1);
		const fn = () => handleMouseDownSlice(normStep);
		fn();
		timeoutRef.current = setInterval(fn, 10);
	};

	const onDoubleClick = (evt) => {
		const next = isButtonStart(evt.target) ? min : max;
		whenValueChange(next);
	};
	const onMouseUp = () => clearInterval(timeoutRef.current)

	// render
	const buttonProps = {onDoubleClick, onMouseDown, onMouseUp};
	const startProps = {className: `${className}-start`, ...buttonProps};
	const endProps = {className: `${className}-end`, ...buttonProps};

	return (
		<>
			<button {...startProps} ></button>
			<button {...endProps} ></button>
		</>
	);
};

Component.propTypes = cfg.propTypes;
export const Swing = {cfg, Component};

// ------------------------------------------------------------------------- //