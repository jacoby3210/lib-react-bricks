import * as HOCs        from "./advanced"
import * as Components  from "./components"
import * as Layouts     from "./layouts"

// -------------------------------------------------------------------------- //
// compile api
// -------------------------------------------------------------------------- //

const { 
  withDebug,
  withContainer, withRepeat, withReveal, withUnion,
  withFilter, withMerge,
  withValueBase, withValueBoolean, withValueDigital, withValueLiteral, withValueOption,
} = HOCs;

const compose = (name) => (...components) => (... HOCs) => 
  ({[name]: withDebug(name, ...HOCs)(...components)})

// -------------------------------------------------------------------------- //
// export api
// -------------------------------------------------------------------------- //

export const GUI = {

  Native: { 
    HOCs, 
    Components, 
    Layouts, 
  },

  Components: {

    ... compose("Container")(Components.Container)(
      withMerge("rc-container"),
    ),

    ... compose("Dropout")(Components.Empty)(
      withMerge("rc-dropout", { shown: false, ... Components.Dropout }),
      withContainer, 
      withReveal,
    ),

    ... compose("Empty")(Components.Empty)(
      withMerge("rc-empty"),
    ),
    
    ... compose ("List")(Components.List.Container)(
      withMerge("rc-list", {length: -1, Template: Components.List.Template}),
      withFilter,
      withRepeat,
    ),

    ... compose("Bar")()(
      withMerge("rc-bar", { value: null , ... Components.Bar}),
      withContainer, 
      withValueBase,
      withRepeat,
    ),
    
    ... compose("CheckBox")(Components.CheckBox)(
      withMerge("rc-checkbox", { value: false }),
      withValueBoolean,
    ),
    
    ... compose("Clicker")(Components.Clicker)(
      withMerge("rc-clicker", { value: 0 }),
      withValueDigital,
    ),

    ... compose("Range")(Components.Range)(
      withMerge("rc-range", { axis: false, value: 0 }),
      withValueDigital, 
    ),

    ... compose("Swing")(Components.Swing)(
      withMerge("rc-swing", { axis: false, value: 0 }),
      withContainer,
      withValueDigital, 
    ),

    ... compose("Advisor")()(
      withMerge("rc-advisor", {value: '', ... Components.Advisor }),
      withContainer, 
      withValueLiteral,
      withFilter, 
      withValueOption, 
      withReveal, 
      withRepeat,
    ),

    ... compose("Paragraph")(Components.Paragraph)(        
      withMerge("rc-paragraph", {value: '',}),
      withValueLiteral,
    ),

    ... compose("Select")()(
      withMerge("rc-select", {shown: false, ... Components.Select}),
      withContainer, 
      withFilter, 
      withValueOption, 
      withReveal, 
      withRepeat,
    ),

    ... compose("Switcher")(Components.Switcher)(
      withMerge("rc-switcher", {max: (props)=>props.src.length, value: 0}),
      withValueOption, 
      withContainer,
    ),

    ... compose("Text")(Components.Text)(
      withMerge("rc-text")
    )
    
  },

  Layouts: {
    
    ... compose("Changer")()(
      withMerge("rc-changer", {... Layouts.Changer}),
      withContainer, 
      withRepeat,
    ),

    ... compose("Navigator")(Layouts.Navigator)(
      withMerge("rc-navigator"),
      withContainer,
    ),

    ... compose("Paginator")(Layouts.Paginator.Container)(
      withMerge("rc-paginator", {... Layouts.Changer}),
      withContainer, 
      withRepeat,
    ),

    ... compose("Accordion")()(
      withMerge("rc-accordion", {mode: "all", value: [], ... Layouts.Accordion}),
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

    ... compose("Inspector")()(
      withMerge("rc-inspector", {... Layouts.Inspector}),
      withValueBase, 
      withContainer, 
      withRepeat,
    ),

  }
}

GUI.Templates = {

  ... compose("Browser")()(
    withMerge("rc-browser", {value: 0}), 
    withContainer, 
    withValueOption, 
    withUnion(GUI.Layouts.Changer, GUI.Components.List)
  ),

  ... compose("Catalog")()(
    withMerge("rc-catalog", {value: 0}), 
    withContainer,
    withValueOption, 
    withUnion(GUI.Layouts.Paginator, GUI.Components.List)
  ),

  ... compose("Gallery")()(
    withMerge("rc-gallery", {value: 0}), 
    withContainer,
    withValueOption, 
    withUnion(GUI.Layouts.Navigator, GUI.Components.List)
  ),

}

// -------------------------------------------------------------------------- //