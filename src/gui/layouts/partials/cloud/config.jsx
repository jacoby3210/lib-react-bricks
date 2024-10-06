import PropTypes from 'prop-types';
import * as cfg from '/src/gui/config'
import {Advisor} from '/src/gui/layouts/fields/advisor'
import * as code from "./code"
// ------------------------------------------------------------------------- //
// Constants
// ------------------------------------------------------------------------- //

export const CSS_CLASS_DEFAULT = `${cfg.CSS_CLASS_DEFAULT}-cloud`;

// ------------------------------------------------------------------------- //
// Type checking.
// ------------------------------------------------------------------------- //

export const propTypes = {
	... cfg.propTypes,
  src: PropTypes.array,
	// value: PropTypes.array,
  whenValueChange: PropTypes.func,
	whenValueModify: PropTypes.func,
}

// ------------------------------------------------------------------------- //
// Values by default.
// ------------------------------------------------------------------------- //

export const propValues = {
  ... Advisor.cfg.propValues,                     //
	... cfg.propPackageBase.values(CSS_CLASS_DEFAULT),          //
  mode: 'unique',																	// display mode for searching and adding tags (all, unique).
	src: [],																				// source data array available tags.
	// value: [],									  								// selected tags from source data array.
  whenValueChange: (next, prev) => next,		      // value change handler.
	whenValueModify: (m) => next		                // value modify handler.
}

// ------------------------------------------------------------------------- //