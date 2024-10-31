// -------------------------------------------------------------------------- //
// Feature set for graphical user interface components
// Designed for use in conjunction with layouts.
// -------------------------------------------------------------------------- //

import { withDirection } from "./props/direction";

// content - modifies and tracks the html layouts of the component.

export {withContainer}          from "./content/container"                    // - to wrap base component into ui block (<div>).
export {withCursor}             from "./content/cursor";                      // - to navigate through the direct children of an element.
export {withRepeat}             from "./content/repeat";                      // - to create a list of recurring components.
export {withReveals}            from "./content/reveals";                     // - to reveal child components.

// props - modifies and tracks the properties of the component.

export {withDirection}          from "./props/direction";                     // - to support a component with vertical / horizontal direction.
export {withMerge}              from "./props/merge";                         // - to smartly merge the component's default and passed properties.
export {withState}              from "./props/state";                         // - to create a managed state of the wrapped component.

// value 

export {withValueBase}          from "./value/base";                          // - to handle a change in the value of a component (variant type).
export {withValueNumber}        from "./value/number";                        // - to handle a change in the value of a component (numeric type).
// export {withValueHandleText}    from "./value/text";                          //
// export {withValueHandleItem}   from "./value/withValueHandleItem"         // - to handle a change in the value of a component (source option type).

// -------------------------------------------------------------------------- //