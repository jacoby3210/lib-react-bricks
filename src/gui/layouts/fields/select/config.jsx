import PropTypes from 'prop-types';
import * as cfg from "/src/gui/config.jsx"
import * as code from './code'
// ------------------------------------------------------------------------- //
// Constants
// ------------------------------------------------------------------------- //

export const CSS_CLASS_DEFAULT = `${cfg.CSS_CLASS_DEFAULT}-select`;

// ------------------------------------------------------------------------- //
// Type checking.
// ------------------------------------------------------------------------- //

export const propTypes = {
  ... cfg.propPackageBase.types,
  ... cfg.propPackageValueBase.types,
};

// ------------------------------------------------------------------------- //
// Values by default.
// ------------------------------------------------------------------------- //

export const propValues = {
  ... cfg.propPackageBase.values(CSS_CLASS_DEFAULT),
  ... cfg.propPackageValueBase.values("0"),
  src: [],                                        // data source for repeated output of items.
  Template: code.TemplateDefault,                 // jsx template for displaying item data in the ui.
};

// ------------------------------------------------------------------------- //