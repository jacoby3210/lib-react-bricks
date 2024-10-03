import PropTypes from 'prop-types';
import * as cfg from "/src/gui/config.jsx"
// ------------------------------------------------------------------------- //
// Constants.
// ------------------------------------------------------------------------- //

export const CSS_CLASS_DEFAULT = `${cfg.CSS_CLASS_DEFAULT}-slider`;

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
  axis: false,                                    // axis in the depth of which the GUI component is located.
  min: 0.0,                                       // minimum value available for choice.
  max: 1.0,                                       // maximum value available for choice.
  speed: 0.01,                                    // speed of slider movement on the track.
  step: 0.01,                                     // minimum step to change the value.
  value: 0,                                       // current value.
  whenValueChange: (next, prev) => next,          // callback to handle the value state update.
};

// ------------------------------------------------------------------------- //