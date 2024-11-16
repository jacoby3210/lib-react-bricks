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
  return item.caption != this.value && item.caption.includes(this.value);
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
    Toggle: 
      withMerge("rc-toggle", { value: null , ... Components.Toggle})
      (compose(withValueBase, withContainer, withRepeat)(Components.Container)),

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
      (compose(withContainer, withValueBase, withFilter, withReveals, withRepeat)
      (Components.Select.Container)),
    Switcher: 
      withMerge("rc-switcher", {})
      (compose(withValueBase, withContainer)(Components.Switcher)),
    Text: 
      withMerge("rc-text")(Components.Text)
  },

  Layouts: {

    Browser: 
      withMerge("rc-browser", {... Layouts.Browser})
      (compose(withValueDigit, withContainer, withRepeat)
      (Components.Container)),
    Navigator: 
      withMerge("rc-navigator")
      (compose(withValueDigit, withContainer)(Layouts.Navigator)),
    Paginator: 
      withMerge("rc-paginator", {... Layouts.Browser})
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

// -------------------------------------------------------------------------- //