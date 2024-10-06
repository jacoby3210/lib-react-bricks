import PropTypes from 'prop-types';
import * as cfg from "/src/gui/config.jsx"
// ------------------------------------------------------------------------- //
// Constants.
// ------------------------------------------------------------------------- //

export const CSS_CLASS_DEFAULT = `${cfg.CSS_CLASS_DEFAULT}-swing`;

// ------------------------------------------------------------------------- //
// Type checking.
// ------------------------------------------------------------------------- //

export const propTypes = {
  ... cfg.propPackageBase.types,
  ... cfg.propPackageOrientationBase.types,
  ... cfg.propPackageValueNumber.types,
  axis: PropTypes.bool,
};

// ------------------------------------------------------------------------- //
// Values by default.
// ------------------------------------------------------------------------- //

export const propValues = {
  ... cfg.propPackageBase.values(CSS_CLASS_DEFAULT),
  ... cfg.propPackageValueNumber.values(1.0, 0.0, 0.01, 0.01, 0.00),
  ... cfg.propPackageOrientationBase.values(false),
};

// ------------------------------------------------------------------------- //