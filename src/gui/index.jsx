import * as HOCs from "./features"
import * as Layouts from "./layouts"
import * as Widgets from "./widgets"

// -------------------------------------------------------------------------- //
// prepare api
// -------------------------------------------------------------------------- //

const Container = HOCs.withMerge(Layouts.Container.cfg.values) 
  (Layouts.Container.Component);
const Dropout   = HOCs.withMerge(Layouts.Dropout.cfg.values) 
  (HOCs.withContainer(HOCs.withReveals(Layouts.Dropout.Component)));
const List      = HOCs.withMerge(Layouts.List.cfg.values)
  (HOCs.withRepeat(Layouts.List.Template, Layouts.List.Component))
const Empty     = HOCs.withMerge(Layouts.Empty.cfg.values)
  (Layouts.Empty.Component);

const CheckBox  = HOCs.withMerge(Layouts.CheckBox.cfg.values) 
  (HOCs.withValueBase(Layouts.CheckBox.Component));
const Clicker   = HOCs.withMerge(Layouts.Clicker.cfg.values)  
  (HOCs.withValueDigit(Layouts.Clicker.Component));
const Range     = HOCs.withMerge(Layouts.Range.cfg.values)    
  (HOCs.withValueDigit(HOCs.withDirection(Layouts.Range.Component)));
const Swing     = HOCs.withMerge(Layouts.Swing.cfg.values)    
  (HOCs.withValueDigit(HOCs.withContainer(Layouts.Swing.Component)));
const Toggle  = HOCs.withMerge(Layouts.Toggle.cfg.values) 
  (HOCs.withValueBase(HOCs.withContainer(HOCs.withRepeat(Layouts.Toggle.Template))));

const Advisor   = HOCs.withMerge(Layouts.Advisor.cfg.values) 
  (HOCs.withValueText(HOCs.withReveals(HOCs.withCursor(HOCs.withRepeat(Layouts.Advisor.Template, Layouts.Advisor.Component)))));
const Paragraph = HOCs.withMerge(Layouts.Paragraph.cfg.values)
  (HOCs.withValueText(Layouts.Paragraph.Component));
const Select    = HOCs.withMerge(Layouts.Select.cfg.values)
  (HOCs.withValueBase(HOCs.withReveals(HOCs.withContainer(HOCs.withRepeat(Layouts.Select.Template, Layouts.Select.Component)))));
const Switcher  = HOCs.withMerge(Layouts.Switcher.cfg.values)
  (HOCs.withValueBase(HOCs.withContainer(Layouts.Switcher.Component)));
  
const Slider    = HOCs.withMerge(Layouts.Slider.cfg.values)
  (HOCs.withValueDigit(HOCs.withDirection(HOCs.withContainer(Layouts.Slider.Component))));

const Browser = HOCs.withMerge(Widgets.Browser.cfg.values)
  (HOCs.withValueDigit(HOCs.withContainer(HOCs.withRepeat(Widgets.Browser.Template))));
const Navigator = HOCs.withMerge(Widgets.Navigator.cfg.values)
  (HOCs.withValueDigit(HOCs.withContainer(Widgets.Navigator.Component)));
  const Paginator = HOCs.withMerge(Widgets.Paginator.cfg.values)
    (HOCs.withValueDigit(HOCs.withContainer(HOCs.withRepeat(Widgets.Browser.Template, Widgets.Paginator.Component))));
const Scroll = HOCs.withMerge(Widgets.Scroll.cfg.values)
 ( HOCs.withState("value")(HOCs.withValueDigit(HOCs.withDirection(HOCs.withContainer(Widgets.Scroll.Component)))));

const Accordion = HOCs.withMerge(Widgets.Accordion.cfg.values)
  (HOCs.withValueBase(HOCs.withContainer(HOCs.withRepeat(Widgets.Accordion.Template, Widgets.Accordion.Component))));
const CheckList = HOCs.withMerge(Widgets.CheckList.cfg.values)
  (HOCs.withValueBase(HOCs.withContainer(HOCs.withRepeat(Widgets.CheckList.Template))));

const Inspector = HOCs.withMerge(Widgets.Inspector.cfg.values)
  (HOCs.withValueBase(HOCs.withContainer(HOCs.withRepeat(Widgets.Inspector.Template))));
const Menu = HOCs.withMerge(Widgets.Menu.cfg.values)
  (HOCs.withValueBase(HOCs.withContainer(HOCs.withRepeat(Widgets.Menu.Template))));

const LAdvisor   = HOCs.withMerge(Layouts.Advisor.cfg.values) 
  (HOCs.withValueLocale(HOCs.withReveals(HOCs.withCursor(HOCs.withRepeat(Layouts.Advisor.Template, Layouts.Advisor.Component)))));
const LParagraph = HOCs.withMerge(Layouts.Paragraph.cfg.values)
  (HOCs.withValueLocale(Layouts.Paragraph.Component));

// -------------------------------------------------------------------------- //
// external module api
// -------------------------------------------------------------------------- //

export const GUI = {
  HOCs,    
  Common: {
    Container, Dropout, Empty, List, 
    CheckBox, Clicker, Range, Swing, Toggle,
    Advisor, Paragraph, Select, Switcher,
    Slider, 
  },
  Locale:{
    LAdvisor, 
    LParagraph
  },
  Widgets: {
    Browser, Navigator, Scroll, Paginator, 
    Accordion, CheckList, Menu, Inspector,
  }
}

// -------------------------------------------------------------------------- //