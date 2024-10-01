import PropTypes from 'prop-types';
import * as cfg from "/src/gui/config.jsx"
import * as Code from "./code.jsx"
// ------------------------------------------------------------------------- //
// Constants.
// ------------------------------------------------------------------------- //

export const CSS_CLASS_DEFAULT = `${cfg.CSS_CLASS_DEFAULT}-radio-bar`;

// ------------------------------------------------------------------------- //
// Type checking.
// ------------------------------------------------------------------------- //

export const propTypes = {
  ... cfg.propTypes,
  Template: PropTypes.func,
  src: PropTypes.array,
  value: PropTypes.any,
  whenValueChange: PropTypes.func, 
};

// ------------------------------------------------------------------------- //
// Values by default.
// ------------------------------------------------------------------------- //

export const propValues = {
  ... cfg.propValues(CSS_CLASS_DEFAULT),
  name: "switch",                                 //
  Template: Code.RadioBarTemplate,                //
  src: [],                                        //
  value: null,                                    // current value.
  whenValueChange: (next, prev) => next,          // callback to handle the value state update.
};

// ------------------------------------------------------------------------- //