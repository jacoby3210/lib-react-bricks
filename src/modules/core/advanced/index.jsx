
// -------------------------------------------------------------------------- //
// Advanced GUI features implemented as HOCs.
// -------------------------------------------------------------------------- //

// common - аdd a few general capabilities.

export {withDebug}                            from "./common/debug";          // - to display the element name in the react developer tools.

// markup - modifies the html markup of the component.

export {useContainer, withContainer}          from "./markup/container"       // - to wrap base component into ui block (<div>).
export {useRepeat, withRepeat}                from "./markup/repeat";         // - to create a list of child components according to the template.
export {useReveal, withReveal}                from "./markup/reveal";         // - to reveal child components.
export {withUnion}                            from "./markup/union";          // - to transfer common properties to multiple components

// props - modifies the properties of the component.

export {withFilter}                           from "./props/filter";          // - to apply a filter to the source data.
export {withMerge}                            from "./props/merge";           // - to smartly merge the component's default and passed properties.

// value 

export {useValueBase, withValueBase}          from "./value/base";            // - to handle a change in the value (type: base\variant).
export {useValueBoolean, withValueBoolean}    from "./value/boolean";         // - to handle a change in the value (type: boolean).
export {useValueDigital, withValueDigital}    from "./value/digital";         // - to handle a change in the value (type: digital).
export {useValueLiteral, withValueLiteral}    from "./value/literal";         // - to handle a change in the value (type: literal - line\paragraph).
export {useValueOption, withValueOption}      from "./value/option";          // - to handle a change in the value (type: option from source data).

// -------------------------------------------------------------------------- //