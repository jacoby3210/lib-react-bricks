// ------------------------------------------------------------------------- //
// Layouts intended for the graphical user interface.
// ------------------------------------------------------------------------- //

// Layouts - basics - interface elements non-interacting with the user
export {Container}        from "./basics/container";      // - for use as a container for other components.
export {Dropout}          from "./basics/dropout";        // - for rendering a dropout layouts.
export {Empty}            from "./basics/empty";          // - use in place where the syntax requires component.
export {Repeater}         from "./basics/repeater";       // - to render multiple items from a source in a template.

// Layouts - controls - interface elements interacting with the user by means of a mouse.
export {CheckBox}         from "./controls/checkbox";     // - wrapping around the classic checkbox for simplicity.
export {Clicker}          from "./controls/clicker";      // - to track the user's clicks and display the total score value.
export {RadioBar}         from "./controls/radiobar";     // - to output multiple radio buttons as a single component.
export {Range}            from "./controls/range";        // - to select a value from the suggested numeric range.
export {Swing}            from "./controls/swing";        // - to control the increase/decrease of the value

// Layouts - fields - interface elements interacting with the user by means of a keyboard. 
export {Advisor}          from "./fields/advisor";        // - to show text line field with autocomplete suggestions.
export {Select}           from "./fields/select";         // - for selection one option from the source list.
export {Switcher}         from "./fields/switcher";       // - for selection one option from the source list (alt mode).

// Layouts - partials - interface elements interacting with the user by means of a mouse.
export {Slider}           from "./partials/slider";       // - represents universal customizable content scroller.

// ------------------------------------------------------------------------- //