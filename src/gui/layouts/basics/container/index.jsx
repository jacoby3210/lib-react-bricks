import {useRef} from "react"
import {propValues, propTypes } from "./config"
// ------------------------------------------------------------------------- //
// React Component for use as a container for other components.
// ------------------------------------------------------------------------- //

export const Component = props => {

		// initial props
		const {
			id,
			className,
			children,
			value,
			...attributes
		} = props;

		// render
    return (
			<div id={id} className={className} value={value}>
				{children}
			</div>
    );
};

export const Container = {Component, propValues}

// ------------------------------------------------------------------------- //