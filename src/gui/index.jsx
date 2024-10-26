import * as HOCs from "./components"
import * as Layouts from "./layouts"
import * as Widgets from "./widgets"
// ------------------------------------------------------------------------- //
// Header file for export module. Compile widgets.
// ------------------------------------------------------------------------- //

const Container = HOCs.withMergeProps(Layouts.Container.cfg.propValues) 
  (Layouts.Container.Component);
const Dropout   = HOCs.withMergeProps(Layouts.Dropout.cfg.propValues) 
  (HOCs.withContainer(HOCs.withPopup(Layouts.Dropout.Component)));
const Empty     = HOCs.withMergeProps(Layouts.Empty.cfg.propValues)
  (Layouts.Empty.Component);
const Repeater  = HOCs.withMergeProps(Layouts.Repeater.cfg.propValues)
  (HOCs.withValueHandleBase(HOCs.withDataSource(Layouts.Repeater.Component)));

const CheckBox  = HOCs.withMergeProps(Layouts.CheckBox.cfg.propValues) 
  (HOCs.withValueHandleBase(Layouts.CheckBox.Component));
const Clicker   = HOCs.withMergeProps(Layouts.Clicker.cfg.propValues)  
  (HOCs.withValueHandleNumber(Layouts.Clicker.Component));
const RadioBar  = HOCs.withMergeProps(Layouts.RadioBar.cfg.propValues) 
  (HOCs.withValueHandleBase(HOCs.withDataSource(Layouts.RadioBar.Component)));
const Range     = HOCs.withMergeProps(Layouts.Range.cfg.propValues)    
  (HOCs.withValueHandleNumber(Layouts.Range.Component));
const Swing     = HOCs.withMergeProps(Layouts.Swing.cfg.propValues)    
  (HOCs.withValueHandleNumber(HOCs.withContainer(Layouts.Swing.Component)));

const Advisor   = HOCs.withMergeProps(Layouts.Advisor.cfg.propValues) 
  (HOCs.withValueHandleBase(HOCs.withDataSourceCursor(HOCs.withDataSourceFilter(HOCs.withContainer(HOCs.withPopup(Layouts.Advisor.Component))))));
const Select    = HOCs.withMergeProps(Layouts.Select.cfg.propValues)
  (HOCs.withValueHandleBase(HOCs.withDataSource(HOCs.withContainer(HOCs.withPopup(Layouts.Select.Component)))));
const Switcher  = HOCs.withMergeProps(Layouts.Switcher.cfg.propValues)
  (HOCs.withValueHandleBase(HOCs.withContainer(Layouts.Switcher.Component)));
  
const Slider    = HOCs.withMergeProps(Layouts.Slider.cfg.propValues)
  (HOCs.withValueHandleNumber(HOCs.withContainer(Layouts.Slider.Component)));

const Accordion = HOCs.withMergeProps(Widgets.Accordion.cfg.propValues)
  (HOCs.withContainer(Widgets.Accordion.Component));
const Browser = HOCs.withMergeProps(Widgets.Browser.cfg.propValues)
  (HOCs.withValueHandleNumber(HOCs.withContainer(Widgets.Browser.Component)));
const Navigator = HOCs.withMergeProps(Widgets.Navigator.cfg.propValues)
  (HOCs.withValueHandleNumber(HOCs.withContainer(Widgets.Navigator.Component)));
const Paginator = HOCs.withMergeProps(Widgets.Paginator.cfg.propValues)
  (HOCs.withValueHandleNumber(HOCs.withContainer(Widgets.Paginator.Component)));
const Scroll = HOCs.withMergeProps(Widgets.Scroll.cfg.propValues)
  (HOCs.withValueHandleNumber(HOCs.withContainer(Widgets.Scroll.Component)));

// external module api
export const GUI = {
  HOCs,    
  Common: {
    Container, Dropout, Empty, Repeater,
    CheckBox,  Clicker, RadioBar, Range, Swing,
    Advisor, Select, Switcher,
    Slider, 
  },
  Widgets: {
    Accordion, Browser, Navigator, Paginator, Scroll,
  }
 }

// ------------------------------------------------------------------------- //