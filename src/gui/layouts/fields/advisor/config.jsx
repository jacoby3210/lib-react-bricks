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
  ... cfg.propPackageDataSource.types,
  ... cfg.propPackageTemplate.types,
  ... cfg.propPackageValueBase.types,
}

// ------------------------------------------------------------------------- //
// Values by default.
// ------------------------------------------------------------------------- //

function filter(item) {
  return item.caption != this.value && item.caption.includes(this.value);
}

export const propValues = {
  ... cfg.propPackageBase.values(CSS_CLASS_DEFAULT),
  ... cfg.propPackageDataSource.values(filter),
  ... cfg.propPackageTemplate.values(code.TemplateDefault),
  ... cfg.propPackageValueBase.values(""),
}

// ------------------------------------------------------------------------- //