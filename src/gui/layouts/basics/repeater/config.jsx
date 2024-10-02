import PropTypes from 'prop-types';
import * as cfg from "/src/gui/config.jsx"
import {TemplateDefault} from "./code.jsx"
// ------------------------------------------------------------------------- //
// Constants.
// ------------------------------------------------------------------------- //

export const CSS_CLASS_DEFAULT = `${cfg.CSS_CLASS_DEFAULT}-repeater`;

// ------------------------------------------------------------------------- //
// Type checking.
// ------------------------------------------------------------------------- //

export const propTypes = {
  ... cfg.propTypes,
  from: PropTypes.number,
	length: PropTypes.number,
	src: PropTypes.array,
	Template: PropTypes.func,
};

// ------------------------------------------------------------------------- //
// Values by default.
// ------------------------------------------------------------------------- //

export const propValues = {
  ... cfg.propValues(CSS_CLASS_DEFAULT),
  from: 0,																				// start index to display elements.
	length: 0,																			// length of items to display (count).
	src: [],																				// source data array provider for mapping.
	Template: TemplateDefault, 	            				// template to generate a gui for an individual item in an array.
};

// ------------------------------------------------------------------------- //