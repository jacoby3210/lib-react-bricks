import * as cfg from "./config"
// ========================================================================= //
// React Component - use in place where the syntax requires component.
// ========================================================================= //

export const Component = props => {
    return (<></>);
};

Component.propTypes = cfg.propTypes;
export const Empty = {cfg, Component}

// ------------------------------------------------------------------------- //