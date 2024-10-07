import * as cfg from "/src/gui/config.jsx"
import * as code from "./code.jsx"
// ------------------------------------------------------------------------- //
// Constants.
// ------------------------------------------------------------------------- //

export const CSS_CLASS_DEFAULT = `${cfg.CSS_CLASS_DEFAULT}-repeater`;

// ------------------------------------------------------------------------- //
// Type checking.
// ------------------------------------------------------------------------- //

export const propTypes = {
  ... cfg.propPackageBase.types,
  ... cfg.propPackageDataSource.types,
  ... cfg.propPackageTemplate.types,
};

// ------------------------------------------------------------------------- //
// Values by default.
// ------------------------------------------------------------------------- //

export const propValues = {
  ... cfg.propPackageBase.values(CSS_CLASS_DEFAULT),
  ... cfg.propPackageDataSource.values(),
  ... cfg.propPackageTemplate.values(code.TemplateDefault),
};

// ------------------------------------------------------------------------- //