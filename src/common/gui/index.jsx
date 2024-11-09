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

  
const CheckBox  = HOCs.withMerge("rc-checkbox", Layouts.CheckBox.cfg.values)
  (HOCs.withValueBoolean(Layouts.CheckBox.Component));
const Clicker   = HOCs.withMerge("rc-clicker", Layouts.Clicker.cfg.values)  
  (HOCs.withValueDigit(Layouts.Clicker.Component));
const Range     = HOCs.withMerge("rc-range", Layouts.Range.cfg.values)    
  (HOCs.withValueDigit(HOCs.withDirection(Layouts.Range.Component)));
const Swing     = HOCs.withMerge("rc-swing", Layouts.Swing.cfg.values)    
  (HOCs.withValueDigit(HOCs.withContainer(Layouts.Swing.Component)));
const Toggle    = HOCs.withMerge("rc-toggle", Layouts.Toggle.cfg.values) 
  (HOCs.withValueBase(HOCs.withContainer(HOCs.withRepeat(Layouts.Toggle.Template))));

const Advisor   = HOCs.withMerge("rc-checkbox", Layouts.Advisor.cfg.values) 
  (HOCs.withValueText(HOCs.withReveals(HOCs.withCursor(HOCs.withRepeat(Layouts.Advisor.Template, Layouts.Advisor.Component)))));
const Paragraph = HOCs.withMerge("rc-paragraph", Layouts.Paragraph.cfg.values)
  (HOCs.withValueText(Layouts.Paragraph.Component));
const Select    = HOCs.withMerge("rc-select", Layouts.Select.cfg.values)
  (HOCs.withValueBase(HOCs.withReveals(HOCs.withContainer(HOCs.withRepeat(Layouts.Select.Template, Layouts.Select.Component)))));
const Switcher  = HOCs.withMerge("rc-switcher", Layouts.Switcher.cfg.values)
  (HOCs.withValueBase(HOCs.withContainer(Layouts.Switcher.Component)));
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