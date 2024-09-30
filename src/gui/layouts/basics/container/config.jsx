import PropTypes from 'prop-types';
import * as CommonConfig from "/src/gui/config.jsx"
// ------------------------------------------------------------------------- //
// Constants.
// ------------------------------------------------------------------------- //

export const CSS_CLASS_DEFAULT = `${CommonConfig.CSS_CLASS_DEFAULT}-container`;

// ------------------------------------------------------------------------- //
// Type checking.
// ------------------------------------------------------------------------- //

export const propTypes = {
  ... CommonConfig.propTypes,
	value: PropTypes.any,
	whenValueChange: PropTypes.func,
};

// ------------------------------------------------------------------------- //
// Values by default.
// ------------------------------------------------------------------------- //

export const propValues = {
  ... CommonConfig.propValues(CSS_CLASS_DEFAULT),
	value: null,																		// current value.
	whenValueChange: (next, prev) => next,					// callback to handle the value state update.
};

// ------------------------------------------------------------------------- //