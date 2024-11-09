import * as HOCs    from "./components"
import * as Layouts from "./layouts"
// import * as Widgets from "./widgets"

// -------------------------------------------------------------------------- //
// prepare api
// -------------------------------------------------------------------------- //

const Container = HOCs.withMerge("rc-container") 
  (Layouts.Container);
const Dropout   = HOCs.withMerge("rc-dropout", {shown: false}) 
  (HOCs.withContainer(HOCs.withReveals(Layouts.Dropout)));
const List      = HOCs.withMerge("rc-list")
  (HOCs.withRepeat(Layouts.List.Template, Layouts.List.Container))
const Empty     = HOCs.withMerge("rc-empty")
  (Layouts.Empty);

  
const CheckBox  = HOCs.withMerge("rc-checkbox", {value: false})
  (HOCs.withValueBoolean(Layouts.CheckBox));
const Clicker   = HOCs.withMerge("rc-clicker", {value: 0})  
  (HOCs.withValueDigit(Layouts.Clicker));
const Range     = HOCs.withMerge("rc-range", {axis:false, value: 0})    
  (HOCs.withValueDigit(HOCs.withDirection(Layouts.Range)));
const Swing     = HOCs.withMerge("rc-swing", {axis:false, value: 0})    
  (HOCs.withValueDigit(HOCs.withContainer(Layouts.Swing)));
const Toggle    = HOCs.withMerge("rc-toggle", {value: null}) 
  (HOCs.withValueBase(HOCs.withContainer(HOCs.withRepeat(Layouts.Toggle.Template))));

const filter = function (item) {return item.caption != this.value && item.caption.includes(this.value);}
const Advisor   = HOCs.withMerge("rc-advisor", {filter, value: ""}) 
  (HOCs.withValueText(HOCs.withContainer(HOCs.withReveals(HOCs.withCursor(HOCs.withRepeat(Layouts.Advisor.Template, Layouts.Advisor.Container))))));
const Paragraph = HOCs.withMerge("rc-paragraph", {})
  (HOCs.withValueText(Layouts.Paragraph));
const Select    = HOCs.withMerge("rc-select", {})
  (HOCs.withValueBase(HOCs.withReveals(HOCs.withContainer(HOCs.withRepeat(Layouts.Select.Template, Layouts.Select.Container)))));
const Switcher  = HOCs.withMerge("rc-switcher", {})
  (HOCs.withValueBase(HOCs.withContainer(Layouts.Switcher)));
const Text      = HOCs.withMerge("rc-text")
  (Layouts.Text);

// -------------------------------------------------------------------------- //
// external module api
// -------------------------------------------------------------------------- //

export const GUI = {
  Native: {HOCs, Layouts},    
  Common: {
    Container, Dropout, Empty, List, Text,
    CheckBox, Clicker, Range, Swing, Toggle,
    Advisor, Paragraph, Select, Switcher,
    // Slider, 
  },
  Widgets: {
    // Browser, Navigator, Paginator, Scroll, Slider, 
    // Accordion, CheckList, Menu, Inspector,
  }
}

// -------------------------------------------------------------------------- //