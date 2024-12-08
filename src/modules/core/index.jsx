import * as HOCs        from "./advanced"
import * as Components  from "./components"
// import * as Layouts     from "./layouts"

// -------------------------------------------------------------------------- //
// compile api
// -------------------------------------------------------------------------- //

const { 
  withDebug,
  withContainer, withRepeat, withReveal,
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
    // Layouts 
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
      withMerge("rc-advisor", {... Components.Advisor }),
      withContainer, 
      withValueLiteral,
      withFilter, 
      withValueOption, 
      withReveal, 
      withRepeat,
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

  }
}

GUI.Templates = {}

// -------------------------------------------------------------------------- //