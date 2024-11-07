import * as gCFG from "@lib-react-bricks/src/gui/config.jsx"

// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix:"text"});

// -------------------------------------------------------------------------- //
// Layout - to render only read value (as text).
// -------------------------------------------------------------------------- //

const Component = ({children, value}) => (<span>{value|children}</span>);
Component.propTypes = cfg.types;
export const Text = {cfg, Component}

// -------------------------------------------------------------------------- //