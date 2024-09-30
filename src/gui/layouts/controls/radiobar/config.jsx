import PropTypes from 'prop-types';
import * as CommonConfig from "./src/gui/config.jsx"
import * as Code from "./code.jsx"
// ------------------------------------------------------------------------- //
// Constants.
// ------------------------------------------------------------------------- //

export const DEFAULT_CLASS = `${CommonConfig.DEFAULT_CLASS}-radio-bar`;

// ------------------------------------------------------------------------- //
// Type checking.
// ------------------------------------------------------------------------- //

export const propTypes = {
  ... CommonConfig.propTypes,
  Template: PropTypes.func,
  src: PropTypes.array,
  value: PropTypes.any,
  whenValueChange: PropTypes.func, 
};

// ------------------------------------------------------------------------- //
// Values by default.
// ------------------------------------------------------------------------- //

export const propsValues = {
  ... CommonConfig.propValues(DEFAULT_CLASS),
  name: "switch",                                 //
  Template: Code.RadioBarTemplate,                //
  src: [],                                        //
  value: null,                                    // current value.
  whenValueChange: (next, prev) => next,          // callback to handle the value state update.
};

// ------------------------------------------------------------------------- //