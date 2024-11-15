
// -------------------------------------------------------------------------- //
// Advanced GUI features implemented as HOCs.
// -------------------------------------------------------------------------- //

// content - modifies and tracks the html layouts of the component.

export {withContainer}          from "./content/container"                    // - to wrap base component into ui block (<div>).
export {withCursor}             from "./content/cursor";                      // - to navigate through the direct children of an element.
export {withRepeat}             from "./content/repeat";                      // - to create a list of recurring components.
export {withReveals}            from "./content/reveals";                     // - to reveal child components.

// props - modifies and tracks the properties of the component.

export {withDirection}          from "./props/direction";                     // - to support a component with vertical / horizontal direction.
export {withFilter}             from "./props/filter";                        // -
export {withMerge}              from "./props/merge";                         // - to smartly merge the component's default and passed properties.
export {withState}              from "./props/state";                         // - to create a managed state of the wrapped component.

// value 

export {withValueBase}          from "./value/base";                          // - to handle a change in the value of a component (variant type).
export {withValueBoolean}       from "./value/boolean";                       // - to handle a change in the value of a component (variant type).
export {withValueDigit}         from "./value/digit";                         // - to handle a change in the value of a component (digit type).
export {withValueText}          from "./value/text";                          // - to handle a change in the value of a component (text type).

// -------------------------------------------------------------------------- //