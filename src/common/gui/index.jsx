import * as HOCs        from "./advanced"
import * as Components  from "./components"
import * as Layouts     from "./layouts"

// -------------------------------------------------------------------------- //
// prepare api
// -------------------------------------------------------------------------- //

const Button    = HOCs.withMerge("rc-button")
  (Components.Button)
const Container = HOCs.withMerge("rc-container") 
  (Components.Container);
const Dropout   = HOCs.withMerge("rc-dropout", {shown: false}) 
  (HOCs.withContainer(HOCs.withReveals(Components.Dropout)));
const List      = HOCs.withMerge("rc-list")
  (HOCs.withRepeat(Components.List.Template, Components.List.Container))
const Empty     = HOCs.withMerge("rc-empty")
  (Components.Empty);
  
const CheckBox  = HOCs.withMerge("rc-checkbox", {value: false})
  (HOCs.withValueBoolean(Components.CheckBox));
const Clicker   = HOCs.withMerge("rc-clicker", {value: 0})  
  (HOCs.withValueDigit(Components.Clicker));
const Range     = HOCs.withMerge("rc-range", {axis:false, value: 0})    
  (HOCs.withValueDigit(HOCs.withDirection(Components.Range)));
const Swing     = HOCs.withMerge("rc-swing", {axis:false, value: 0})    
  (HOCs.withValueDigit(HOCs.withContainer(Components.Swing)));
const Toggle    = HOCs.withMerge("rc-toggle", {value: null}) 
  (HOCs.withValueBase(HOCs.withContainer(HOCs.withRepeat(Components.Toggle.Template))));

const filter = function (item) {return item.caption != this.value && item.caption.includes(this.value);}
const Advisor   = HOCs.withMerge("rc-advisor", {filter, value: ""}) 
  (HOCs.withValueText(HOCs.withContainer(HOCs.withReveals(HOCs.withCursor(HOCs.withRepeat(Components.Advisor.Template, Components.Advisor.Container))))));
const Paragraph = HOCs.withMerge("rc-paragraph", {})
  (HOCs.withValueText(Components.Paragraph));
const Select    = HOCs.withMerge("rc-select", {})
  (HOCs.withValueBase(HOCs.withReveals(HOCs.withContainer(HOCs.withRepeat(Components.Select.Template, Components.Select.Container)))));
const Switcher  = HOCs.withMerge("rc-switcher", {})
  (HOCs.withValueBase(HOCs.withContainer(Components.Switcher)));
const Text      = HOCs.withMerge("rc-text")
  (Components.Text);

const Browser   = HOCs.withMerge("rc-browser")
  (HOCs.withValueDigit(HOCs.withContainer(HOCs.withRepeat(Layouts.Browser.Template))));
const Navigator = HOCs.withMerge("rc-navigator")
  (HOCs.withValueDigit(HOCs.withContainer(Layouts.Navigator)));
const Paginator = HOCs.withMerge("rc-paginator")
    (HOCs.withValueDigit(HOCs.withContainer(HOCs.withRepeat(Layouts.Browser.Template, Layouts.Paginator.Container))));
const Scroll    = HOCs.withMerge("rc-scroll", {mode:"smootn", target: null, value: 0.0})
 (HOCs.withState("value")(HOCs.withValueDigit(HOCs.withDirection(HOCs.withContainer(Layouts.Scroll)))));

const Accordion = HOCs.withMerge("rc-accordion")
  (HOCs.withValueBase(HOCs.withContainer(HOCs.withRepeat(Layouts.Accordion.Template, Layouts.Accordion.Container))));
const CheckList = HOCs.withMerge("rc-checklist")
  (HOCs.withValueBase(HOCs.withContainer(HOCs.withRepeat(Layouts.CheckList.Template))));
const Inspector = HOCs.withMerge("rc-inspector")
  (HOCs.withValueBase(HOCs.withContainer(HOCs.withRepeat(Layouts.Inspector.Template))));
const Menu = HOCs.withMerge("rc-menu")
  (HOCs.withValueBase(HOCs.withContainer(HOCs.withRepeat(Layouts.Menu.Template))));

// -------------------------------------------------------------------------- //
// external module api
// -------------------------------------------------------------------------- //

export const GUI = {
  Native: {HOCs, Components, Layouts},    
  Components: {
    Button, Container, Dropout, Empty, List, Text,
    CheckBox, Clicker, Range, Swing, Toggle,
    Advisor, Paragraph, Select, Switcher,
  },
  Layouts: {
    Browser, Navigator, Paginator, Scroll, // Slider, 
    Accordion, CheckList, Inspector, Menu, // Tree,
  }
}

// -------------------------------------------------------------------------- //