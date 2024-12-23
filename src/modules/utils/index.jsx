// -------------------------------------------------------------------------- //
// A set of support functions to simplify your work.
// -------------------------------------------------------------------------- //

// Resolve

// to resolve the property axis to a set of properties (vertically or horizontally).
export { resolveAxis } from "./resolve/axis";

// to resolve the property data to a set of properties.
export { resolveData } from "./resolve/data";

// to resolve additional css classes based on the first one.
export { resolveClassName } from "./resolve/className";

// to resolve the property to a summary value.
export { resolveFunction } from "./resolve/function";

// Shortcut

// to simplify context creation.
export { createSmartContext } from "./shortcuts/createSmartContext";

// to send customizable events.
export { triggerEvent } from "./shortcuts/triggerEvent";

// to check if the variable is of array type.
export { isObject } from "./shortcuts/isObject";

// to handle mounting \ unmounting of components
export { useEffectMount } from "./shortcuts/useEffectMount";

// to converts the array returned by useReducer into object.
export { useReducerAsContext } from "./shortcuts/useReducerAsContext";

// -------------------------------------------------------------------------- //
