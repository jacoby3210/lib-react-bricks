import { compose }      from 'redux'; 
import * as HOCs        from "./advanced"
import * as Components  from "./components"
import * as Layouts     from "./layouts"

// -------------------------------------------------------------------------- //
// prepare api
// -------------------------------------------------------------------------- //

const { 
  withDebug,
  withContainer, withCursor,  withReveals, withRepeat, 
  withDirection, withFilter, withMerge, withState, 
  withValueBase, withValueBoolean, withValueDigit, withValueText,
  withUnion,
} = HOCs;

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

    Button: 
      compose(
        withDebug("ff"),
        withMerge("rc-button")
      )(Components.Button),
    
    Container: 
      compose(
        withMerge("rc-container")
      )(Components.Container),
    
    Dropout: 
      compose(
        withMerge("rc-dropout", { shown: false, ... Components.Dropout }),
        withContainer, 
        withReveals,
      )(Components.Empty),
    
    List: 
      compose(
        withMerge("rc-list", {... Components.List}),
        withFilter, 
        withRepeat,
      )(Components.List.Container),

    Empty: 
      compose(
        withMerge("rc-empty"),
      )(Components.Empty),

    Bar: 
      compose(
        withMerge("rc-bar", { value: null , ... Components.Bar}),
        withValueBase, 
        withContainer, 
        withRepeat,
      )(Components.Container),

    CheckBox: 
      compose(
        withMerge("rc-checkbox", { value: false }),
        withValueBoolean,
      )(Components.CheckBox),

    Clicker: 
      compose(
        withMerge("rc-clicker", { value: 0 }),
        withValueDigit,
      )(Components.Clicker),

    Range: 
      compose(
        withMerge("rc-range", { axis: false, value: 0 }),
        withValueDigit, 
        withDirection
      )(Components.Range),

    Swing: 
      compose(
        withMerge("rc-swing", { axis: false, value: 0 }),
        withValueDigit, 
        withContainer,
      )(Components.Swing),

    Advisor: 
      compose(
        withMerge("rc-advisor", {filter, value: "", ... Components.Advisor }),
        withContainer, 
        withFilter, 
        withValueText, 
        withCursor, 
        withReveals, 
        withRepeat,
      )(Components.Advisor.Container),

    Paragraph: 
      compose(
        withMerge("rc-paragraph", {}),
        withValueText
      )(Components.Paragraph),

    Select: 
      compose(
        withMerge("rc-select", {shown: false, ... Components.Select}),
        withContainer, 
        withValueBase, 
        withFilter, 
        withCursor, 
        withReveals, 
        withRepeat,
      )(Components.Select.Container),

    Switcher: 
      compose(
        withMerge("rc-switcher", {max: (props)=>props.src.length, value: 0}),
        withValueDigit, 
        withContainer,
      )(Components.Switcher),

    Text: 
      compose(
        withMerge("rc-text")
      )(Components.Text)
  },

  Layouts: {

    Display: 
      compose(
        withMerge("rc-display", {... Layouts.Display}),
        withValueDigit, 
        withContainer, 
        withRepeat,
      )(Components.Container),

    Navigator: 
      compose(
        withMerge("rc-navigator"),
        withValueDigit, 
        withContainer,
      )(Layouts.Navigator),

    Paginator: 
      compose(
        withMerge("rc-paginator", {... Layouts.Display}),
        withValueDigit, 
        withContainer, 
        withRepeat,
      )(Layouts.Paginator.Container),

    Scroll: 
      compose (
        withMerge("rc-scroll", { mode: "smooth", target: null, max: 1.0, min: 0.0, value: 0.0 }),
        withState("value"), 
        withValueDigit, 
        withDirection, 
        withContainer,
      )(Layouts.Scroll),

    Accordion: 
      compose(
        withMerge("rc-accordion", {... Layouts.Accordion}),
        withValueBase, 
        withContainer, 
        withRepeat,
      )(Layouts.Accordion.Container),

    CheckList: 
      compose(
        withMerge("rc-checklist", {... Layouts.CheckList}),
        withValueBase, 
        withContainer, 
        withRepeat
      )(),

    Inspector: 
      compose(
        withMerge("rc-inspector", {... Layouts.Inspector}),
        withValueBase, 
        withContainer, 
        withRepeat,
      )(Layouts.Inspector.Container),

    Menu: 
      compose(
        withMerge("rc-menu", {... Layouts.Menu}),
        withValueBase, 
        withContainer, 
        withReveals, 
        withRepeat,
      )(Components.Container),

  }
};

GUI.Templates = {
  Browser:
    compose(withMerge("rc-browser", {}), withUnion)
    (GUI.Layouts.Display, GUI.Components.List),
  
  Catalog:
    compose(withMerge("rc-catalog", {}), withUnion)
    (GUI.Layouts.Paginator, GUI.Components.List),
  
  Gallery:
    compose(withMerge("rc-gallery", {}), withUnion)
    (GUI.Layouts.Navigator, GUI.Components.List),
}

// -------------------------------------------------------------------------- //