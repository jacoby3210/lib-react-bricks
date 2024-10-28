import * as cfg from "/src/gui/config.jsx"
// -------------------------------------------------------------------------- //
// Constants.
// -------------------------------------------------------------------------- //

export const CSS_CLASS_DEFAULT = `${cfg.CSS_CLASS_DEFAULT}-paginator`;

// -------------------------------------------------------------------------- //
// Type checking.
// -------------------------------------------------------------------------- //

export const propTypes = {
  ... cfg.propPackageBase.types,
  ... cfg.propPackageSourceData.types,
  ... cfg.propPackageValueNumber.types,
};

// -------------------------------------------------------------------------- //
// Values by default.
// -------------------------------------------------------------------------- //

export const propValues = {
  ... cfg.propPackageBase.values(CSS_CLASS_DEFAULT),
  // ... cfg.propPackageSourceData.values(),
  ... cfg.propPackageValueNumber.values({value:0}),
};

// -------------------------------------------------------------------------- //