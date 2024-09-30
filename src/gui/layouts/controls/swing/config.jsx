import PropTypes from 'prop-types';
import * as CommonConfig from "./src/gui/config.jsx"
// ------------------------------------------------------------------------- //
// Constants.
// ------------------------------------------------------------------------- //

export const DEFAULT_CLASS = `${CommonConfig.DEFAULT_CLASS}-swing`;

// ------------------------------------------------------------------------- //
// Type checking.
// ------------------------------------------------------------------------- //

export const propTypes = {
  ... CommonConfig.propTypes,
  axis: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  speed: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.any,
  whenValueChange: PropTypes.func,
};

// ------------------------------------------------------------------------- //
// Values by default.
// ------------------------------------------------------------------------- //

export const propsValues = {
  ... CommonConfig.propValues(DEFAULT_CLASS),
  axis: false,                                     // axis in the depth of which the GUI component is located.
  min: 0.0,                                        // minimum value available for choice.
  max: 1.0,                                        // maximum value available for choice.
  speed: 0.01,                                     // speed of slider movement on the track.
  step: 0.01,                                      // minimum step to change the value.
  value: null,                                     // current value.
  whenValueChange: (next, prev) => next,           // callback to handle the value state update.
  whenValueModify: (m) => next,                    // callback to modify the value state by coeff.
};

// ------------------------------------------------------------------------- //