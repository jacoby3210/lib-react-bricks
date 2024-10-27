import PropTypes from 'prop-types'
import * as cfg from "/src/gui/config.jsx"
// ------------------------------------------------------------------------- //
// Constants.
// ------------------------------------------------------------------------- //

export const CSS_CLASS_DEFAULT = `${cfg.CSS_CLASS_DEFAULT}-scroll`;

// ------------------------------------------------------------------------- //
// Type checking.
// ------------------------------------------------------------------------- //

export const propTypes = {
  ... cfg.propPackageBase.types,
  ... cfg.propPackageOrientationBase.types,
  ... cfg.propPackageValueNumber.types,
	mode: PropTypes.string,
	target: PropTypes.object,
};

// ------------------------------------------------------------------------- //
// Values by default.
// ------------------------------------------------------------------------- //

export const propValues = {
  ... cfg.propPackageBase.values(CSS_CLASS_DEFAULT),
  ... cfg.propPackageOrientationBase.values(false),
  ... cfg.propPackageValueNumber.values({value: 0}),
	mode: "smooth",																	// scrolling mode (using by DOM API methods)
	target: null,                                   // scrolling target element.
};

// ------------------------------------------------------------------------- //