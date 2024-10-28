import * as globalCFG from "/src/gui/config.jsx"
// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = globalCFG.createConfig("empty");
globalCFG.applyPackage(cfg, globalCFG.propPackageBase, {className:cfg.CSS_CLASS_DEFAULT});

// -------------------------------------------------------------------------- //
// React Component - use in place where the syntax requires component.
// -------------------------------------------------------------------------- //

const Component = props => {
  return (<></>);
};

Component.propTypes = cfg.propTypes;
export const Empty = {cfg, Component}

// -------------------------------------------------------------------------- //