// -------------------------------------------------------------------------- //
// Basic functionality presented as HOCs.
// Designed for use in conjunction with layouts.
// -------------------------------------------------------------------------- //

// layout - modifies and tracks the html layouts of the component.

export {withRepeat}             from "./layout/repeat";                       // - for creating a list of repeating components.
export {withReveals}            from "./layout/reveals";                      // - to reveal child components.

// props - modifies and tracks the properties of the component.

export {withMerge}              from "./props/merge";                         // - to smartly merge the component's default and passed properties.

// -------------------------------------------------------------------------- //