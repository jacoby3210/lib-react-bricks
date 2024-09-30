import React from 'react';
// ------------------------------------------------------------------------- //
// Helper functions.																												 //
// ------------------------------------------------------------------------- //

// Props
export const horizontalProps = {
	axis: "horizontal",
	cursor: "clientX",
	offset: "x",
	size: "width",
}

export const verticalProps = {
	axis: "vertical",
	cursor: "clientY",
	offset: "y",
	size: "height",
}

// Inline components.
export const RangeTrack = receivedProps => {
	const { children, className, trackRef, ...attributes } = receivedProps;
	return (
		<div
			className={`${className}-range-track`}
			ref={trackRef}
			{...attributes}
		> {children}
		</div >
	);
};

export const RangeThumb = receivedProps => {
	const { children, className, thumbRef, ...attributes } = receivedProps;
	return (<div
		className={`${className}-range-thumb`}
		ref={thumbRef}
		{...attributes}
	/>);
}

// Handle position
export const getPosition = (
	rect, props, clientOffset, thumbOffset
) => {
	const absolutePos = clientOffset - rect[props.offset] - thumbOffset;
	const relativePos = Math.max(0, Math.min(1, absolutePos / rect[props.size]));
	return relativePos;
};

export const positionToValue = (value, min, max, step) => {
	return min + Math.round((value * (max - min)) / step) * step
}

// Control value.
export const valueAnimate = (start, end, duration, handleUpdateValueState) => {
	let startTime = null;

	const step = timestamp => {
		if (!startTime) startTime = timestamp;
		const progress = (timestamp - startTime) / duration;
		const newValue = start + (end - start) * progress;
		handleUpdateValueState(newValue);

		if (progress < 1) requestAnimationFrame(step);
		else handleUpdateValueState(end);
	};

	requestAnimationFrame(step);
};

export const valueToStyle = (axis, value, min, max) => {
	const style = `${((value - min) / (max - min)) * 100.0}%`
	return axis ? { left: style } : { top: style }
};

// ========================================================================= //