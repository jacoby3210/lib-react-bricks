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
	... cfg.propTypes,
  src: PropTypes.array,
	Template: PropTypes.func,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	whenValueChange: PropTypes.func,
	whenValueModify: PropTypes.func,
}

// ------------------------------------------------------------------------- //
// Values by default.
// ------------------------------------------------------------------------- //

export const propValues = {
	... cfg.propValues(CSS_CLASS_DEFAULT),
  src: [],																			// source data array available suggestions.
	Template: code.TemplateDefault,			          // template to generate a gui for an individual suggestion.
	value: 0,																			// current display text.
	whenValueChange: (next, prev) => next,		      // value change handler.
	whenValueModify: (m) => next		              // value modify handler.
}

// ------------------------------------------------------------------------- //