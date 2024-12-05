// -------------------------------------------------------------------------- //
// A set of support functions to simplify your work.
// -------------------------------------------------------------------------- //

// common functions

export {createSmartContext}         from "./createSmartContext"               // to simplify context creation.
export {resolveClassName}           from "./resolveClassName"                 // to resolve additional css classes based on the first one.
export {resolveProperty}            from "./resolveProperty"                  // to resolve the property to a summary value.
export {resolvePropertyAxis}        from "./resolvePropertyAxis"              // to resolve the property axis to a set of properties (vertically or horizontally).

// custom hooks

export {useEffectMount}             from "./useEffectMount"                   // to handle mounting \ unmounting of components 
export {useReducerAsContext}        from "./useReducerAsContext"              // to converts the array returned by useReducer into object.

// -------------------------------------------------------------------------- //