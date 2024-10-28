import * as gCFG from "/src/gui/config.jsx"
// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix:"empty"});

// -------------------------------------------------------------------------- //
// React Component - use in place where the syntax requires component.
// -------------------------------------------------------------------------- //

const Component = props => {
  return (<></>);
};

Component.propTypes = cfg.propTypes;
export const Empty = {cfg, Component}

// -------------------------------------------------------------------------- //