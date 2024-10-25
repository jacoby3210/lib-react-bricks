import * as HOC from "./components"
import * as Layouts from "./layouts"
import * as Widgets from "./widgets"
// ------------------------------------------------------------------------- //
// Header file for export module. Compile widgets.
// ------------------------------------------------------------------------- //

const Container = HOC.withMergeProps(Layouts.Container.cfg.propValues) 
  (Layouts.Container.Component);
const Dropout   = HOC.withMergeProps(Layouts.Dropout.cfg.propValues) 
  (HOC.withContainer(HOC.withPopup(Layouts.Dropout.Component)));
const Empty     = HOC.withMergeProps(Layouts.Empty.cfg.propValues)
  (Layouts.Empty.Component);
const Repeater  = HOC.withMergeProps(Layouts.Repeater.cfg.propValues)
  (HOC.withValue(HOC.withDataSource(Layouts.Repeater.Component)));

const CheckBox  = HOC.withMergeProps(Layouts.CheckBox.cfg.propValues) 
  (HOC.withValue(Layouts.CheckBox.Component));
const Clicker   = HOC.withMergeProps(Layouts.Clicker.cfg.propValues)  
  (HOC.withValueNumberCheck(Layouts.Clicker.Component));
const RadioBar  = HOC.withMergeProps(Layouts.RadioBar.cfg.propValues) 
  (HOC.withValue(HOC.withDataSource(Layouts.RadioBar.Component)));
const Range     = HOC.withMergeProps(Layouts.Range.cfg.propValues)    
  (HOC.withValueNumberCheck(Layouts.Range.Component));
const Swing     = HOC.withMergeProps(Layouts.Swing.cfg.propValues)    
  (HOC.withValueNumberCheck(HOC.withContainer(Layouts.Swing.Component)));

const Advisor   = HOC.withMergeProps(Layouts.Advisor.cfg.propValues) 
  (HOC.withValue(HOC.withDataSourceCursor(HOC.withDataSourceFilter(HOC.withContainer(HOC.withPopup(Layouts.Advisor.Component))))));
const Select    = HOC.withMergeProps(Layouts.Select.cfg.propValues)
  (HOC.withValue(HOC.withDataSource(HOC.withContainer(HOC.withPopup(Layouts.Select.Component)))));
const Switcher  = HOC.withMergeProps(Layouts.Switcher.cfg.propValues)
  (HOC.withValue(HOC.withContainer(Layouts.Switcher.Component)));
  
const Slider    = HOC.withMergeProps(Layouts.Slider.cfg.propValues)
  (HOC.withValueNumberCheck(HOC.withContainer(Layouts.Slider.Component)));

const Browser = HOC.withMergeProps(Widgets.Browser.cfg.propValues)
  (HOC.withValueNumberCheck(HOC.withContainer(Widgets.Browser.Component)));
const Navigator = HOC.withMergeProps(Widgets.Navigator.cfg.propValues)
  (HOC.withValueNumberCheck(HOC.withContainer(Widgets.Navigator.Component)));
const Paginator = HOC.withMergeProps(Widgets.Paginator.cfg.propValues)
  (HOC.withValueNumberCheck(HOC.withContainer(Widgets.Paginator.Component)));
const Scroll = HOC.withMergeProps(Widgets.Scroll.cfg.propValues)
  (HOC.withValueNumberCheck(HOC.withContainer(Widgets.Scroll.Component)));

// external module api
export const GUI = {
  HOC,    
  Common: {
    Container, Dropout, Empty, Repeater,
    CheckBox,  Clicker, RadioBar, Range, Swing,
    Advisor, 
    Select, Slider, Switcher,
  },
  Widgets: {
    Browser, Navigator, Paginator, Scroll,
  }
 }

// ------------------------------------------------------------------------- //