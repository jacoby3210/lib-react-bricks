// -------------------------------------------------------------------------- //
// A set of support functions to simplify your work.
// -------------------------------------------------------------------------- //

// resolve

export {resolveAxis}                from "./resolve/axis"                     // to resolve the property axis to a set of properties (vertically or horizontally).
export {resolveData}                from "./resolve/data"                     // to resolve the property data to a set of properties.
export {resolveClassName}           from "./resolve/className"                // to resolve additional css classes based on the first one.
export {resolveFunction}            from "./resolve/function"                 // to resolve the property to a summary value.

// shortcuts

export {createSmartContext}         from "./shortcuts/createSmartContext"     // to simplify context creation.
export {isObject}                   from "./shortcuts/isObject"               // to check if the variable is of array type.
export {useEffectMount}             from "./shortcuts/useEffectMount"         // to handle mounting \ unmounting of components 
export {useReducerAsContext}        from "./shortcuts/useReducerAsContext"    // to converts the array returned by useReducer into object.

// -------------------------------------------------------------------------- //