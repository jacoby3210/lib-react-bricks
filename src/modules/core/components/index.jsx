// -------------------------------------------------------------------------- //
// Definition of single components for the graphical user interface.
// -------------------------------------------------------------------------- //

// Base component

// - to use as a universal container for the contents.
export { Container } from "./basics/container";

// - to render the content of the reveal.
export { Dropout } from "./basics/dropout";

// - to use in place where the syntax requires component.
export { Empty } from "./basics/empty";

// - to generate a gui for an item in an source data by default.
export { List } from "./basics/list";

// Controls

// - to provide an advanced version of the classic checkbox.
export { CheckBox } from "./controls/checkbox";

// - to track the user's clicks and display the total value.
export { Clicker } from "./controls/clicker";

// - to select a value from the suggested numeric range.
export { Range } from "./controls/range";

// - to manage the increase/decrease of the digital value.
export { Swing } from "./controls/swing";

// Fields

// - to show text line field with autocomplete suggestions.
export { Advisor } from "./fields/advisor";

// - to display and edit multiline text (paragraph).
export { Paragraph } from "./fields/paragraph";

// - to select one option from the source list.
export { Select } from "./fields/select";

// - to select one option from the source list (alt mode \ enum).
export { Switcher } from "./fields/switcher";

// - to render value as only read text.
export { Text } from "./fields/text";

// -------------------------------------------------------------------------- //
