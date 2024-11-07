// -------------------------------------------------------------------------- //
// Widget - gui components with inbuilt functionality.
// -------------------------------------------------------------------------- //

// content

export {Browser}        from "./content/browser"                              // - to switch of displayed content in the view by special id.
export {Navigator}      from "./content/navigator"                            // - to switch of displayed content in the view by linear order.
export {Paginator}      from "./content/paginator"                            // - to switch of displayed content in the view by the page index. 
export {Scroll}         from "./content/scroll";                              // - to scroll the content in the element.

// segments

export {Accordion}      from "./segments/accordion"                           // - represents list of headers and their associated ui blocks.
export {CheckList}      from "./segments/checklist"                           // - to display the add/remove tags interface.
export {Inspector}      from "./segments/inspector";                          // - to generate form to view/edit objects c JS (basic)
export {Menu}           from "./segments/menu"                                // - to display desktop application menu.

// -------------------------------------------------------------------------- //