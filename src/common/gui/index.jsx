import { compose }      from 'redux'; 
import * as HOCs        from "./advanced"
import * as Components  from "./components"
import * as Layouts     from "./layouts"

// -------------------------------------------------------------------------- //
// prepare api
// -------------------------------------------------------------------------- //

const { 
  withContainer, withCursor,  withReveals, withRepeat, 
  withDirection, withFilter, withMerge, withState, 
  withValueBase, withValueBoolean, withValueDigit, withValueText
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
      withMerge("rc-button")
      (Components.Button),
    Container: 
      withMerge("rc-container")
      (Components.Container),
    Dropout: 
      withMerge("rc-dropout", { shown: false, ... Components.Dropout })
      (compose(withContainer, withReveals)
      (Components.Empty)),
    List: 
      withMerge("rc-list", {... Components.List})
      (compose(withFilter, withRepeat)
      (Components.List.Container)),
    Empty: 
      withMerge("rc-empty")
      (Components.Empty),

    Bar: 
      withMerge("rc-bar", { value: null , ... Components.Bar})
      (compose(withValueBase, withContainer, withRepeat)(Components.Container)),
    CheckBox: 
      withMerge("rc-checkbox", { value: false })
      (compose(withValueBoolean)(Components.CheckBox)),
    Clicker: 
      withMerge("rc-clicker", { value: 0 })
      (withValueDigit(Components.Clicker)),
    Range: 
      withMerge("rc-range", { axis: false, value: 0 })
      (compose(withValueDigit, withDirection)(Components.Range)),
    Swing: 
      withMerge("rc-swing", { axis: false, value: 0 })
      (compose(withValueDigit, withContainer)(Components.Swing)),

    Advisor: 
      withMerge("rc-advisor", { filter, value: "", ... Components.Advisor })(
      compose(withContainer, withFilter, withValueText, withCursor, withReveals, withRepeat)
      (Components.Advisor.Container)
    ),
    Paragraph: 
      withMerge("rc-paragraph", {})
      (withValueText(Components.Paragraph)),
    Select: 
      withMerge("rc-select", {shown: false, ... Components.Select})
      (compose(withContainer, withValueBase, withFilter, withCursor, withReveals, withRepeat)
      (Components.Select.Container)),
    Switcher: 
      withMerge("rc-switcher", {max: (props)=>props.src.length, value: 0})
      (compose(withValueDigit, withContainer)(Components.Switcher)),
    Text: 
      withMerge("rc-text")(Components.Text)
  },

  Layouts: {

    Display: 
      withMerge("rc-display", {... Layouts.Display})
      (compose(withValueDigit, withContainer, withRepeat)
      (Components.Container)),
    Navigator: 
      withMerge("rc-navigator")
      (compose(withValueDigit, withContainer)(Layouts.Navigator)),
    Paginator: 
      withMerge("rc-paginator", {... Layouts.Display})
      (compose(withValueDigit, withContainer, withRepeat)
      (Layouts.Paginator.Container)),
    Scroll: 
      withMerge("rc-scroll", { mode: "smooth", target: null, value: 0.0 })
      (compose(withState("value"), withValueDigit, withDirection, withContainer)
      (Layouts.Scroll)),

    Accordion: 
      withMerge("rc-accordion", {... Layouts.Accordion})
      (compose(withValueBase, withContainer, withRepeat)(Layouts.Accordion.Container)),
    CheckList: withMerge("rc-checklist", {... Layouts.CheckList})
      (compose(withValueBase, withContainer, withRepeat)()),
    Inspector: 
      withMerge("rc-inspector", {... Layouts.Inspector})
      (compose(withValueBase, withContainer, withRepeat)(Layouts.Inspector.Container)),
    Menu: 
      withMerge("rc-menu", {... Layouts.Menu})
      (compose(withValueBase, withContainer,  withReveals, withRepeat)(Components.Container)),

  }
};

GUI.Templates = {
  Browser:
    withMerge("rc-browser", {})
    (HOCs.withUnion(GUI.Layouts.Display, GUI.Components.List)),
  Catalog:
    withMerge("rc-catalog", {})
    (HOCs.withUnion(GUI.Layouts.Paginator, GUI.Components.List)),
  Gallery:
    withMerge("rc-gallery", {})
    (HOCs.withUnion(GUI.Layouts.Navigator, GUI.Components.List)),
}

// -------------------------------------------------------------------------- //