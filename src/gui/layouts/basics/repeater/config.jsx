import PropTypes from 'prop-types';
import * as CommonConfig from "/src/gui/config.jsx"
import {TemplateViewItemDefault} from "./code.jsx"
// ------------------------------------------------------------------------- //
// Constants.
// ------------------------------------------------------------------------- //

export const CSS_CLASS_DEFAULT = `${CommonConfig.CSS_CLASS_DEFAULT}-repeater`;

// ------------------------------------------------------------------------- //
// Type checking.
// ------------------------------------------------------------------------- //

export const propTypes = {
  ... CommonConfig.propTypes,
  from: PropTypes.number,
	length: PropTypes.number,
	src: PropTypes.array,
	TemplateViewItem: PropTypes.func,
	templateViewItemProps: PropTypes.object,
};

// ------------------------------------------------------------------------- //
// Values by default.
// ------------------------------------------------------------------------- //

export const propValues = {
  ... CommonConfig.propValues(CSS_CLASS_DEFAULT),
  from: 0,																				// start index to display elements.
	length: 0,																			// length of items to display (count).
	src: [],																				// source data array provider for mapping.
	TemplateItem: TemplateViewItemDefault, 					// template to generate a gui for an individual item in an array.
	templateItemProps: {},													// additional properties common to all child elements.
};

// ------------------------------------------------------------------------- //