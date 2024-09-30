import PropTypes from 'prop-types';
// ------------------------------------------------------------------------- //
// Constants.
// ------------------------------------------------------------------------- //

export const DEFAULT_CLASS = `${CommonConfig.DEFAULT_CLASS}-dropout`;

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

export const propsValues = {
  ... CommonConfig.propValues(DEFAULT_CLASS),
  value: null,                                    // current value.
  whenValueChange: (next, prev) => next,          // callback to handle the value state update.
};

// ------------------------------------------------------------------------- //