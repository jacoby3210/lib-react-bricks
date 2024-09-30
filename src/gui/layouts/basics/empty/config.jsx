import PropTypes from 'prop-types';
import * as CommonConfig from "/src/gui/config.jsx"
// ------------------------------------------------------------------------- //
// Constants.
// ------------------------------------------------------------------------- //

export const CSS_CLASS_DEFAULT = `${CommonConfig.CSS_CLASS_DEFAULT}-empty`;

// ------------------------------------------------------------------------- //
// Type checking.
// ------------------------------------------------------------------------- //

export const propTypes = { ... CommonConfig.propTypes };

// ------------------------------------------------------------------------- //
// Values by default.
// ------------------------------------------------------------------------- //

export const propValues = { ... CommonConfig.propValues(CSS_CLASS_DEFAULT),};

// ------------------------------------------------------------------------- //