import {DEFAULT_CLASS, propsValues, propTypes } from "./config"
import { DropdownButton } from './helpers';
// ------------------------------------------------------------------------- //
// React Component for rendering a dropout layouts.
// ------------------------------------------------------------------------- //

export const Component = props => {

	// initial data
	const {
		id,
		children,
		caption,
		shownState,
		setShownState,
		...attributes
	} = props;

	// render 
	const handleClick = (evt) => {
		evt.stopPropagation();
		setShownState(!shownState)
	}

	return (
		shownState 
			? <>
					<DropdownButton caption={caption} onClick={handleClick}/>
					{children}
				</> 
			: <DropdownButton caption={caption} onClick={handleClick}/>
	);
};

export const NativeDropout = {Component, propsValues}

// ------------------------------------------------------------------------- //