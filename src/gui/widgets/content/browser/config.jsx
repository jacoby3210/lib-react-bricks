import * as cfg from "/src/gui/config.jsx"
// ------------------------------------------------------------------------- //
// Constants.
// ------------------------------------------------------------------------- //

export const CSS_CLASS_DEFAULT = `${cfg.CSS_CLASS_DEFAULT}-browser`;

// ------------------------------------------------------------------------- //
// Type checking.
// ------------------------------------------------------------------------- //

export const propTypes = {
  ... cfg.propPackageBase.types,
  ... cfg.propPackageDataSource.types,
  ... cfg.propPackageValueNumber.types,
};

// ------------------------------------------------------------------------- //
// Values by default.
// ------------------------------------------------------------------------- //

export const propValues = {
  ... cfg.propPackageBase.values(CSS_CLASS_DEFAULT),
  ... cfg.propPackageDataSource.values(),
  ... cfg.propPackageValueNumber.values({value:0}),
};

// ------------------------------------------------------------------------- //