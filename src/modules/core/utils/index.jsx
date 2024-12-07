// -------------------------------------------------------------------------- //
// A set of support functions to simplify your work.
// -------------------------------------------------------------------------- //

// common functions

export {resolveAxis}                from "./resolve/axis"                     // to resolve the property axis to a set of properties (vertically or horizontally).
export {resolveClassName}           from "./resolve/className"                // to resolve additional css classes based on the first one.
export {resolveFunction}            from "./resolve/function"                 // to resolve the property to a summary value.

// custom hooks

export {createSmartContext}         from "./shortcuts/createSmartContext"     // to simplify context creation.
export {useEffectMount}             from "./shortcuts/useEffectMount"         // to handle mounting \ unmounting of components 
export {useReducerAsContext}        from "./shortcuts/useReducerAsContext"    // to converts the array returned by useReducer into object.

// -------------------------------------------------------------------------- //