// -------------------------------------------------------------------------- //
// Layouts - components for content management.
// -------------------------------------------------------------------------- //

// managers

export {Changer}        from "./managers/changer"                             // - to change of displayed content in the view by value.
export {Navigator}      from "./managers/navigator"                           // - to switch of displayed content in the view by linear order.
export {Paginator}      from "./managers/paginator"                           // - to switch of displayed content in the view by the page index. 

// widgets

export {Accordion}      from "./widgets/accordion"                            // - which organizes content into sections, that can be collapsed/expanded.
export {CheckList}      from "./widgets/checklist"                            // - which displays a tag cloud, with support for adding and deleting tags. 
export {Inspector}      from "./widgets/inspector";                           // - which creates a UI for viewing / editing an object.

// -------------------------------------------------------------------------- //