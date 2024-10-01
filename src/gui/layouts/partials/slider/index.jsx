import { Range } from '../../controls/range';
import { Swing } from '../../controls/swing';
import {propValues, propTypes } from "./config"
// ------------------------------------------------------------------------- //
// React Component represents Range with control buttons.
// ------------------------------------------------------------------------- //

const Component = props => {

	// initial data
	const {parentRef, ...otherProps} = props;
	
	// render 
	return (
		<>
			<Range.Component {...Range.propValues} {...otherProps} />
			<Swing.Component {...Swing.propValues} {...otherProps}/>
		</>
	);
};

Component.propTypes = propTypes;
export const Slider = {Component, propValues};

// ------------------------------------------------------------------------- //