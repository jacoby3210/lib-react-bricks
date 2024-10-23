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
  ... cfg.propPackageValueNumber.values(1.0, 0.0, 0.01, 0.01, 0.00),
	mode: "smooth",																	// scrolling mode (using by DOM API methods)
	target: null,                                   // scrolling target element.
};

// ------------------------------------------------------------------------- //

// 	speed: 0.01, 																		// speed of slider movement on the track.
//   whenValueChange: ()=>{}
// };

// // ========================================================================= //
// // Type checking.
// // ========================================================================= //

// export const propTypes = {
// 	children: PropTypes.oneOfType([
// 		PropTypes.array,
// 		PropTypes.object,
// 		PropTypes.string,
// 	]),
// 	className: PropTypes.oneOfType([
// 		PropTypes.string,
// 		PropTypes.array,
// 		PropTypes.object,
// 	]),
// 	id: PropTypes.string,
// 	speed: PropTypes.number,
// };

// ========================================================================= //