
// -------------------------------------------------------------------------- //
// Advanced GUI features implemented as HOCs.
// -------------------------------------------------------------------------- //

// common - аdd a few general capabilities.

export {withDebug, withDebugCompose}  from "./common/debug";                  // - to display the element name in the React debugger.

// markup - modifies and tracks the html markup of the component.

export {withContainer}                from "./markup/container"               // - to wrap base component into ui block (<div>).
export {withCursor}                   from "./markup/cursor";                 // - to navigate through the direct children of an element.
export {withRepeat}                   from "./markup/repeat";                 // - to create a list of recurring components.
export {withReveals}                  from "./markup/reveals";                // - to reveal child components.
export {withUnion}                    from "./markup/union";                  // - to transfer common properties to multiple components.

// props - modifies and tracks the properties of the component.

export {withDirection}                from "./props/direction";               // - to support a component with vertical / horizontal direction.
export {withFilter}                   from "./props/filter";                  // - to apply a filter to the srс.
export {withMerge}                    from "./props/merge";                   // - to smartly merge the component's default and passed properties.
export {withState}                    from "./props/state";                   // - to create a managed state of the wrapped component.

// value 

export {withValueBase}                from "./value/base";                    // - to handle a change in the value of a component (variant type).
export {withValueBoolean}             from "./value/boolean";                 // - to handle a change in the value of a component (variant type).
export {withValueDigit}               from "./value/digit";                   // - to handle a change in the value of a component (digit type).
export {withValueText}                from "./value/text";                    // - to handle a change in the value of a component (text type).

// -------------------------------------------------------------------------- //