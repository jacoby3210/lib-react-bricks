import * as HOCs        from "./advanced"
import * as Components  from "./components"
import * as Layouts     from "./layouts"

// -------------------------------------------------------------------------- //
// prepare api
// -------------------------------------------------------------------------- //

const { 
  withContainer, withCursor,  withReveals, withRepeat, 
  withDirection, withFilter, withMerge, withState, 
  withValueBase, withValueBoolean, withValueDigit, withValueText,
  withUnion,
} = HOCs;


const compose = (name) => (...components) => (... hocs) => 
  ({[name]: HOCs.withDebugCompose(name, ...hocs)(...components)})

const filter = function (item) {
  return item.caption != this.value && item.value.includes(this.value);
};

export const GUI = {

  Native: { 
    HOCs, 
    Components, 
    Layouts 
  },

  Components: {

    ... compose("Button")(Components.Button)(withMerge("rc-button")),
    
    ... compose("Container")(Components.Container)(withMerge("rc-container")),

    ... compose("Dropout")(Components.Empty)(
      withMerge("rc-dropout", { shown: false, ... Components.Dropout }),
      withContainer, 
      withReveals,
    ),

    ... compose("Empty")(Components.Empty)(withMerge("rc-empty"),),
  
    ... compose ("List")(Components.List.Container)(
      withMerge("rc-list", {length: -1, ... Components.List}),
      withFilter, 
      withRepeat,
    ),

    ... compose("Bar")(Components.Container)(
      withMerge("rc-bar", { value: null , ... Components.Bar}),
      withValueBase, 
      withContainer, 
      withRepeat,
    ),

    ... compose("CheckBox")(Components.CheckBox)(
      withMerge("rc-checkbox", { value: false }),
      withValueBoolean,
    ),

    ... compose("Clicker")(Components.Clicker)(
      withMerge("rc-clicker", { value: 0 }),
      withValueDigit,
    ),

    ... compose("Range")(Components.Range)(
      withMerge("rc-range", { axis: false, value: 0 }),
      withValueDigit, 
      withDirection
    ),

    ... compose("Swing")(Components.Swing)(
      withMerge("rc-swing", { axis: false, value: 0 }),
      withValueDigit, 
      withContainer,
    ),

    ... compose("Advisor")(Components.Advisor.Container)(
      withMerge("rc-advisor", {filter, value: "",  ... Components.Advisor }),
      withContainer, 
      withFilter, 
      withValueText, 
      withCursor, 
      withReveals, 
      withRepeat,
    ),

    ... compose("Paragraph")(Components.Paragraph)(        
      withMerge("rc-paragraph", {}),
      withValueText
    ),

    ... compose("Select")(Components.Select.Container)(
      withMerge("rc-select", {shown: false, ... Components.Select}),
      withContainer, 
      withValueBase, 
      withFilter, 
      withCursor, 
      withReveals, 
      withRepeat,
    ),

    ... compose("Switcher")(Components.Switcher)(
      withMerge("rc-switcher", {max: (props)=>props.src.length, value: 0}),
      withValueDigit, 
      withContainer,
    ),

    ... compose("Text")(Components.Text)(
      withMerge("rc-text")
    )
  },

  Layouts: {

    ... compose("Display")(Components.Container)(
      withMerge("rc-display", {... Layouts.Display}),
      withValueDigit, 
      withContainer, 
      withRepeat,
    ),

    ... compose("Navigator")(Layouts.Navigator)(
      withMerge("rc-navigator"),
      withValueDigit, 
      withContainer,
    ),

    ... compose("Paginator")(Layouts.Paginator.Container)(
      withMerge("rc-paginator", {... Layouts.Display}),
      withValueDigit, 
      withContainer, 
      withRepeat,
    ),

    ... compose ("Scroll")(Layouts.Scroll)(
      withMerge("rc-scroll", { mode: "smooth", target: null, max: 1.0, min: 0.0, value: 0.0 }),
      withState("value"), 
      withValueDigit, 
      withDirection, 
      withContainer,
    ),

    ... compose("Accordion")(Layouts.Accordion.Container)(
      withMerge("rc-accordion", {... Layouts.Accordion}),
      withValueBase, 
      withContainer, 
      withRepeat,
    ),

    ... compose("CheckList")()(
      withMerge("rc-checklist", {... Layouts.CheckList}),
      withValueBase, 
      withContainer, 
      withRepeat
    ),

    ... compose("Inspector")(Layouts.Inspector.Container)(
      withMerge("rc-inspector", {... Layouts.Inspector}),
      withValueBase, 
      withContainer, 
      withRepeat,
    ),

    ... compose("Menu")(Components.Container)(
      withMerge("rc-menu", {... Layouts.Menu}),
      withValueBase, 
      withContainer, 
      withReveals, 
      withRepeat,
    ),

  }
};

GUI.Templates = {
  
  ... compose("Browser")()(
    withMerge("rc-browser", {value: 0}), 
    withUnion(GUI.Layouts.Display, GUI.Components.List)
  ),
  
  ... compose("Catalog")()(
    withMerge("rc-catalog", {value: 0}), 
    withUnion(GUI.Layouts.Paginator, GUI.Components.List)
  ),
  
  ... compose("Gallery")()(
    withMerge("rc-gallery", {value: 0}), 
    withUnion(GUI.Layouts.Navigator, GUI.Components.List)
  ),
  
}

// -------------------------------------------------------------------------- //