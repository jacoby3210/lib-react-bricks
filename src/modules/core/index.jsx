import * as HOCs        from "./advanced"
import * as Components  from "./components"
// import * as Layouts     from "./layouts"

// -------------------------------------------------------------------------- //
// compile api
// -------------------------------------------------------------------------- //

const { 
  withDebug,
} = HOCs;

const compose = (name) => (...components) => (... HOCs) => 
  ({[name]: withDebug(name, ...HOCs)(...components)})

// -------------------------------------------------------------------------- //
// export api
// -------------------------------------------------------------------------- //

export const GUI = {

  Native: { 
    HOCs, 
    // Components, 
    // Layouts 
  },

  Components: {

  },

  Layouts: {
    
  }
}

GUI.Templates = {}

// -------------------------------------------------------------------------- //