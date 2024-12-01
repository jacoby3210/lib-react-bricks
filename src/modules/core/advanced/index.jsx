
// -------------------------------------------------------------------------- //
// Advanced GUI features implemented as HOCs.
// -------------------------------------------------------------------------- //

// common - аdd a few general capabilities.

export {withDebug}                    from "./common/debug";                  // - to display the element name in the react developer tools.

// markup - modifies the html markup of the component.

export {withContainer}                from "./markup/container"               // - to wrap base component into ui block (<div>).
export {withReveals}                  from "./markup/reveals";                // - to reveal child components.

// props - modifies the properties of the component.

export {withMerge}                    from "./props/merge";                   // - to smartly merge the component's default and passed properties.

// value 

// -------------------------------------------------------------------------- //