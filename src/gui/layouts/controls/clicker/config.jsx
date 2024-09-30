import PropTypes from 'prop-types';
import * as CommonConfig from "/src/gui/config.jsx"
// ------------------------------------------------------------------------- //
// Constants.
// ------------------------------------------------------------------------- //

export const CSS_CLASS_DEFAULT = `${CommonConfig.CSS_CLASS_DEFAULT}-clicker`;

// ------------------------------------------------------------------------- //
// Type checking.
// ------------------------------------------------------------------------- //

export const propTypes = {
  ... CommonConfig.propTypes,
  cost: PropTypes.number,
	value: PropTypes.any,
	whenValueChange: PropTypes.func,
	whenValueModify: PropTypes.func,
};

// ------------------------------------------------------------------------- //
// Values by default.
// ------------------------------------------------------------------------- //

export const propValues = {
  ... CommonConfig.propValues(CSS_CLASS_DEFAULT),
  cost: 1,
	value: null,																		// current value.
	whenValueChange: (next, prev) => next,					// callback to handle the value state update.
	whenValueModify: (m) => next,					          // callback to handle the value state update.
};

// ------------------------------------------------------------------------- //