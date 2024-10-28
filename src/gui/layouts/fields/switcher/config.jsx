import PropTypes from 'prop-types';
import * as cfg from '/src/gui/config'
// -------------------------------------------------------------------------- //
// Constants
// -------------------------------------------------------------------------- //

export const CSS_CLASS_DEFAULT = `${cfg.CSS_CLASS_DEFAULT}-switcher`;

// -------------------------------------------------------------------------- //
// Type checking.
// -------------------------------------------------------------------------- //

export const propTypes = {
  ... cfg.propPackageBase.types,
  ... cfg.propPackageSourceData.types,
  ... cfg.propPackageValueBase.types,
  rounded: PropTypes.bool,
}

// -------------------------------------------------------------------------- //
// Values by default.
// -------------------------------------------------------------------------- //

export const propValues = {
  ... cfg.propPackageBase.values(CSS_CLASS_DEFAULT),
  // ... cfg.propPackageSourceData.values(),
  ... cfg.propPackageValueBase.values({value:0}),
  rounded: true,
}

// -------------------------------------------------------------------------- //