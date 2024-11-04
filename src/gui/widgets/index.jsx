// -------------------------------------------------------------------------- //
// Layouts intended for the graphical user interface.
// -------------------------------------------------------------------------- //

// content

export {Browser}        from "./content/browser"                              // - to switch of displayed content in the view by special id.
export {Navigator}      from "./content/navigator"                            // - to switch of displayed content in the view by linear order.
export {Paginator}      from "./content/paginator"                            // - to switch of displayed content in the view by the page index. 
export {Scroll}         from "./content/scroll";                              // - to scroll the content in the element.

// view

export {Accordion}      from "./view/accordion"                               // - represents list of headers and their associated ui blocks.
export {CheckList}      from "./view/checklist"                               // - to display the add/remove tags interface.

// -------------------------------------------------------------------------- //