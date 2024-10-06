import PropTypes from 'prop-types';
import * as cfg from '/src/gui/config'
import * as code from "./code"
// ------------------------------------------------------------------------- //
// Constants
// ------------------------------------------------------------------------- //

export const CSS_CLASS_DEFAULT = `${cfg.CSS_CLASS_DEFAULT}-advisor`;

// ------------------------------------------------------------------------- //
// Type checking.
// ------------------------------------------------------------------------- //

export const propTypes = {
	... cfg.propPackageBase.types,
  ... cfg.propPackageValueBase.types,
  src: PropTypes.array,
	Template: PropTypes.func,
}

// ------------------------------------------------------------------------- //
// Values by default.
// ------------------------------------------------------------------------- //

export const propValues = {
  ... cfg.propPackageBase.values(CSS_CLASS_DEFAULT),
  ... cfg.propPackageValueBase.values(""),
  src: [],																			// source data array available suggestions.
	Template: code.TemplateDefault,			          // template to generate a gui for an individual suggestion.
}

// ------------------------------------------------------------------------- //