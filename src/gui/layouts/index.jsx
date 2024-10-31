// -------------------------------------------------------------------------- //
// Defining the basic layout of components to form a graphical user interface.
// -------------------------------------------------------------------------- //

// - basics

export {Container}        from "./basics/container";                          // - to use as a universal container for the contents.
export {Dropout}          from "./basics/dropout";                            // - to render the content of the reveal.
export {Empty}            from "./basics/empty";                              // - to use in place where the syntax requires component.
export {Item}             from "./basics/item";                               // - to generate a gui for an item in an source data by default.

// - controls
export {CheckBox}         from "./controls/checkbox";                         // - to provide an advanced version of the classic checkbox.
export {Clicker}          from "./controls/clicker";                          // - to track the user's clicks and display the total value.
export {Range}            from "./controls/range";                            // - to select a value from the suggested numeric range.

// - fields

// - partials

// -------------------------------------------------------------------------- //