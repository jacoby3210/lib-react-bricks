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
  ... cfg.propPackageValueBase.types,
  rounded: PropTypes.bool,
  src: PropTypes.array,
}

// ------------------------------------------------------------------------- //
// Values by default.
// ------------------------------------------------------------------------- //

export const propValues = {
  ... cfg.propPackageBase.values(CSS_CLASS_DEFAULT),
  ... cfg.propPackageValueBase.values(""),
  rounded: true,                                  //
  src: [],                                        // source data array provider for mapping.
}

// ------------------------------------------------------------------------- //