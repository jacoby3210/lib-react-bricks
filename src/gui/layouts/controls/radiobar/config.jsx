import PropTypes from 'prop-types';
import * as cfg from "/src/gui/config.jsx"
import * as code from "./code.jsx"
// ------------------------------------------------------------------------- //
// Constants.
// ------------------------------------------------------------------------- //

export const CSS_CLASS_DEFAULT = `${cfg.CSS_CLASS_DEFAULT}-radio-bar`;

// ------------------------------------------------------------------------- //
// Type checking.
// ------------------------------------------------------------------------- //

export const propTypes = {
  ... cfg.propTypes,
  src: PropTypes.array,
  Template: PropTypes.func,
  value: PropTypes.any,
  whenValueChange: PropTypes.func, 
};

// ------------------------------------------------------------------------- //
// Values by default.
// ------------------------------------------------------------------------- //

export const propValues = {
  ... cfg.propValues(CSS_CLASS_DEFAULT),
  name: "switch",                                 //
  Template: code.TemplateDefault,                 //
  src: [],                                        //
  value: null,                                    // current value.
  whenValueChange: (next, prev) => next,          // callback to handle the value state update.
};

// ------------------------------------------------------------------------- //