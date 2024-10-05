import PropTypes from 'prop-types';
import * as cfg from '/src/gui/config'
import * as code from "./code"
// ------------------------------------------------------------------------- //
// Constants
// ------------------------------------------------------------------------- //

export const CSS_CLASS_DEFAULT = `${cfg.CSS_CLASS_DEFAULT}-switcher`;

// ------------------------------------------------------------------------- //
// Type checking.
// ------------------------------------------------------------------------- //

export const propTypes = {
  ... cfg.propTypes,
  rounded: PropTypes.bool,
  src: PropTypes.array,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  whenValueChange: PropTypes.func,
  whenValueModify: PropTypes.func,
}

// ------------------------------------------------------------------------- //
// Values by default.
// ------------------------------------------------------------------------- //

export const propValues = {
  ... cfg.propValues(CSS_CLASS_DEFAULT),
  rounded: true,                                  //
  src: [],                                        // source data array provider for mapping.
  value: 0,                                       // current value.
  whenValueChange: (next, prev) => next,          // callback to handle the value state update.
  whenValueModify: (m) => next,                   // callback to modify the value state by coeff.
}

// ------------------------------------------------------------------------- //