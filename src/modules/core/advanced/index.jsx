// -------------------------------------------------------------------------- //
// Advanced GUI features implemented as HOCs.
// -------------------------------------------------------------------------- //

// common - аdd a few general capabilities.

// - to display the element name in the react developer tools.
export { withDebug } from "./common/debug";

// markup - modifies the html markup of the component.

// - to wrap base component into ui block (<div>).
export { useContainer, withContainer } from "./markup/container";

// - to create a list of child components according to the template.
export { useRepeat, withRepeat } from "./markup/repeat";

// - to reveal child components.
export { useReveal, withReveal } from "./markup/reveal";

// - to transfer common properties to multiple components
export { withUnion } from "./markup/union";

// Props - modifies the properties of the component.

// - to apply a filter to the source data.
export { withFilter } from "./props/filter";

// - to smartly merge the component's default and passed properties.
export { withMerge } from "./props/merge";

// Value - manage value prop of the component.

// - to handle a change in the value (type: base\variant).
export { useValueBase, withValueBase } from "./value/base";

// - to handle a change in the value (type: boolean).
export { useValueBoolean, withValueBoolean } from "./value/boolean";

// - to handle a change in the value (type: digital).
export { useValueDigital, withValueDigital } from "./value/digital";

// - to handle a change in the value (type: literal - line\paragraph).
export { useValueLiteral, withValueLiteral } from "./value/literal";

// - to handle a change in the value (type: option from source data).
export { useValueOption, withValueOption } from "./value/option";

// -------------------------------------------------------------------------- //
