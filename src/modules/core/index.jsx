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
  withValueBase, 
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

    ... compose("Container")(Components.Container)(withMerge("rc-container")),

    ... compose("Dropout")(Components.Empty)(
      withMerge("rc-dropout", { shown: false, ... Components.Dropout }),
      withContainer, 
      withReveal,
    ),

    ... compose("Empty")(Components.Empty)(withMerge("rc-empty"),),
    
    ... compose ("List")(Components.List.Container)(
      withMerge("rc-list", {length: -1, Template: Components.List.Template}),
      withFilter,
      withRepeat,
    ),

    ... compose("Bar")()(
      withMerge("rc-bar", { value: null , ... Components.Bar}),
      withValueBase,
      withContainer, 
      withRepeat,
    ),

  },

  Layouts: {

  }
}

GUI.Templates = {}

// -------------------------------------------------------------------------- //