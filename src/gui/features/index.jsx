// -------------------------------------------------------------------------- //
// Basic functionality presented as HOCs.
// Designed for use in conjunction with layouts.
// -------------------------------------------------------------------------- //

// content - modifies and tracks the html layouts of the component.

export {withContainer}          from "./content/container"                    // - to wrap base component into ui block (<div>).
export {withRepeat}             from "./content/repeat";                      // - for creating a list of repeating components.
export {withReveals}            from "./content/reveals";                     // - to reveal child components.

// props - modifies and tracks the properties of the component.

export {withMerge}              from "./props/merge";                         // - to smartly merge the component's default and passed properties.

// -------------------------------------------------------------------------- //