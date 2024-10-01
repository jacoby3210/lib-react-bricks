import PropTypes from 'prop-types';
import * as cfg from "/src/gui/config.jsx"
// ------------------------------------------------------------------------- //
// Constants.
// ------------------------------------------------------------------------- //

export const CSS_CLASS_DEFAULT = `${cfg.CSS_CLASS_DEFAULT}-dropout`;

// ------------------------------------------------------------------------- //
// Type checking.
// ------------------------------------------------------------------------- //

export const propTypes = {
  ... cfg.propTypes,
  value: PropTypes.any,
  whenValueChange: PropTypes.func,
};

// ------------------------------------------------------------------------- //
// Values by default.
// ------------------------------------------------------------------------- //

export const propValues = {
  ... cfg.propValues(CSS_CLASS_DEFAULT),
  value: null,                                    // current value.
  whenValueChange: (next, prev) => next,          // callback to handle the value state update.
};

// ------------------------------------------------------------------------- //