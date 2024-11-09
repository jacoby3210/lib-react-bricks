import * as gCFG from "@lib-react-bricks/src/common/gui/config"

// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix:"empty"});

// -------------------------------------------------------------------------- //
// Layout - to use in place where the syntax requires component.
// -------------------------------------------------------------------------- //

const Component = props => {return (<></>);};
Component.propTypes = cfg.types;
export const Empty = {cfg, Component}

// -------------------------------------------------------------------------- //