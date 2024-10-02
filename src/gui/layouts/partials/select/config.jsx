import PropTypes from 'prop-types';
import * as cfg from "/src/gui/config.jsx"
import * as code from './code'
// ------------------------------------------------------------------------- //
// Constants
// ------------------------------------------------------------------------- //

export const CSS_CLASS_DEFAULT = `${cfg.CSS_CLASS_DEFAULT}-select`;

// ------------------------------------------------------------------------- //
// Type checking.
// ------------------------------------------------------------------------- //

export const propTypes = {
  ... cfg.propTypes,
  axis: PropTypes.bool,
	min: PropTypes.number,
	max: PropTypes.number,
	speed: PropTypes.number,
	step: PropTypes.number,
	value: PropTypes.number,
  whenValueChange: PropTypes.func,
};

// ------------------------------------------------------------------------- //
// Values by default.
// ------------------------------------------------------------------------- //

export const propValues = {
  ... cfg.propValues(CSS_CLASS_DEFAULT),
  src: [],																				// data source for repeated output of items.
  Template: code.TemplateDefault,			            // jsx template for displaying item data in the ui.
	value: 0,																				// current setup value.
  whenValueChange: (next, prev) => next,          // callback to handle the value state update.
};

// ------------------------------------------------------------------------- //