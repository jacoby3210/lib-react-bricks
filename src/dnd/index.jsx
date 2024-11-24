
import {GUI as Core} from "/src/core/gui"

// import * as HOCs        from "./advanced"
// import * as Components  from "./components"
// import * as Layouts     from "./layouts"

// -------------------------------------------------------------------------- //
// prepare api
// -------------------------------------------------------------------------- //

const compose = (name) => (...components) => (... hocs) => 
  ({[name]: Core.HOCs.withDebugCompose(name, ...hocs)(...components)})

export const GUI = {

  Native: { 
    // HOCs, 
    // Components, 
    // Layouts 
  },

  Components: {}
  Layouts: {}
};

GUI.Templates = {}

// -------------------------------------------------------------------------- //

