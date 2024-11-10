import * as HOCs    from "./components"
import * as Layouts from "./layouts"
import * as Widgets from "./widgets"

// -------------------------------------------------------------------------- //
// prepare api
// -------------------------------------------------------------------------- //

const Button = HOCs.withMerge("rc-button")
  (Layouts.Button)
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

const Browser = HOCs.withMerge("rc-browser")
  (HOCs.withValueDigit(HOCs.withContainer(HOCs.withRepeat(Widgets.Browser.Template))));
const Navigator = HOCs.withMerge("rc-navigator")
  (HOCs.withValueDigit(HOCs.withContainer(Widgets.Navigator)));
  const Paginator = HOCs.withMerge("rc-paginator")
    (HOCs.withValueDigit(HOCs.withContainer(HOCs.withRepeat(Widgets.Browser.Template, Widgets.Paginator.Container))));
const Scroll = HOCs.withMerge("rc-scroll", {mode:"smootn", target: null, value: 0.0})
 (HOCs.withState("value")(HOCs.withValueDigit(HOCs.withDirection(HOCs.withContainer(Widgets.Scroll)))));

 const Accordion = HOCs.withMerge("rc-accordion")
  (HOCs.withValueBase(HOCs.withContainer(HOCs.withRepeat(Widgets.Accordion.Template, Widgets.Accordion.Container))));
// const CheckList = HOCs.withMerge(Widgets.CheckList.cfg.values)
//   (HOCs.withValueBase(HOCs.withContainer(HOCs.withRepeat(Widgets.CheckList.Template))));

// const Inspector = HOCs.withMerge(Widgets.Inspector.cfg.values)
//   (HOCs.withValueBase(HOCs.withContainer(HOCs.withRepeat(Widgets.Inspector.Template))));
// const Menu = HOCs.withMerge(Widgets.Menu.cfg.values)
//   (HOCs.withValueBase(HOCs.withContainer(HOCs.withRepeat(Widgets.Menu.Template))));

// -------------------------------------------------------------------------- //
// external module api
// -------------------------------------------------------------------------- //

export const GUI = {
  Native: {HOCs, Layouts},    
  Common: {
    Button, Container, Dropout, Empty, List, Text,
    CheckBox, Clicker, Range, Swing, Toggle,
    Advisor, Paragraph, Select, Switcher,
  },
  Widgets: {
    Browser, Navigator, Paginator, Scroll, // Slider, 
    Accordion, // CheckList, Menu, Inspector,
  }
}

// -------------------------------------------------------------------------- //