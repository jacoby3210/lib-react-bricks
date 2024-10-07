import PropTypes from 'prop-types';
import * as cfg from '/src/gui/config'
// ------------------------------------------------------------------------- //
// Constants
// ------------------------------------------------------------------------- //

export const CSS_CLASS_DEFAULT = `${cfg.CSS_CLASS_DEFAULT}-switcher`;

// ------------------------------------------------------------------------- //
// Type checking.
// ------------------------------------------------------------------------- //

export const propTypes = {
  ... cfg.propPackageBase.types,
  ... cfg.propPackageDataSource.types,
  ... cfg.propPackageValueBase.types,
  rounded: PropTypes.bool,
}

// ------------------------------------------------------------------------- //
// Values by default.
// ------------------------------------------------------------------------- //

export const propValues = {
  ... cfg.propPackageBase.values(CSS_CLASS_DEFAULT),
  ... cfg.propPackageValueBase.values(),
  ... cfg.propPackageValueBase.values(""),
  rounded: true,
}

// ------------------------------------------------------------------------- //