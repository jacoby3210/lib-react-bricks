import * as HOCs from "./components"
import * as Layouts from "./layouts"
import * as Widgets from "./widgets"
// -------------------------------------------------------------------------- //
// Header file for export module. Compile widgets.
// -------------------------------------------------------------------------- //

const Container = HOCs.withMergeProps(Layouts.Container.cfg.values) 
  (Layouts.Container.Component);
const Dropout   = HOCs.withMergeProps(Layouts.Dropout.cfg.values) 
  (HOCs.withContainer(HOCs.withPopup(Layouts.Dropout.Component)));
const Empty     = HOCs.withMergeProps(Layouts.Empty.cfg.values)
  (Layouts.Empty.Component);
const Repeater  = HOCs.withMergeProps(Layouts.Repeater.cfg.values)
  (HOCs.withValueHandleBase(HOCs.withSourceData(Layouts.Repeater.Component)));

const CheckBox  = HOCs.withMergeProps(Layouts.CheckBox.cfg.values) 
  (HOCs.withValueHandleBase(Layouts.CheckBox.Component));
const Clicker   = HOCs.withMergeProps(Layouts.Clicker.cfg.values)  
  (HOCs.withValueHandleNumber(Layouts.Clicker.Component));
const RadioBar  = HOCs.withMergeProps(Layouts.RadioBar.cfg.values) 
  (HOCs.withValueHandleBase(HOCs.withSourceData(Layouts.RadioBar.Component)));
const Range     = HOCs.withMergeProps(Layouts.Range.cfg.values)    
  (HOCs.withValueHandleNumber(Layouts.Range.Component));
const Swing     = HOCs.withMergeProps(Layouts.Swing.cfg.values)    
  (HOCs.withValueHandleNumber(HOCs.withContainer(Layouts.Swing.Component)));

const Advisor   = HOCs.withMergeProps(Layouts.Advisor.cfg.values) 
  (HOCs.withValueHandleText(HOCs.withSourceDataCursor(HOCs.withSourceData(HOCs.withContainer(HOCs.withPopup(Layouts.Advisor.Component))))));
const Paragraph = HOCs.withMergeProps(Layouts.Paragraph.cfg.values)
  (HOCs.withValueHandleText(Layouts.Paragraph.Component));
const Select    = HOCs.withMergeProps(Layouts.Select.cfg.values)
  (HOCs.withValueHandleBase(HOCs.withSourceData(HOCs.withContainer(HOCs.withPopup(Layouts.Select.Component)))));
const Switcher  = HOCs.withMergeProps(Layouts.Switcher.cfg.values)
  (HOCs.withValueHandleItem(HOCs.withContainer(Layouts.Switcher.Component)));
  
const Slider    = HOCs.withMergeProps(Layouts.Slider.cfg.values)
  (HOCs.withValueHandleNumber(HOCs.withContainer(Layouts.Slider.Component)));

const Accordion = HOCs.withMergeProps(Widgets.Accordion.cfg.values)
  (HOCs.withSourceData(HOCs.withContainer(Widgets.Accordion.Component)));
const Browser = HOCs.withMergeProps(Widgets.Browser.cfg.values)
  (HOCs.withValueHandleNumber(HOCs.withSourceData(HOCs.withContainer(Widgets.Browser.Component))));
const Navigator = HOCs.withMergeProps(Widgets.Navigator.cfg.values)
  (HOCs.withValueHandleNumber(HOCs.withSourceData(HOCs.withContainer(Widgets.Navigator.Component))));
// const Paginator = HOCs.withMergeProps(Widgets.Paginator.cfg.values)
//   (HOCs.withValueHandleNumber(HOCs.withSourceData(HOCs.withContainer(Widgets.Paginator.Component))));

// const Scroll = 
//   HOCs.withState("value")
//   (HOCs.withMergeProps(Widgets.Scroll.cfg.values)
//   (HOCs.withValueHandleNumber(HOCs.withContainer(Widgets.Scroll.Component)))
// );

// external module api
export const GUI = {
  HOCs,    
  Common: {
    Container, Dropout, Empty, Repeater,
    CheckBox, Clicker, RadioBar, Range, Swing,
    Advisor, Paragraph, Select, Switcher,
    Slider, 
  },
  Widgets: {
    Accordion, Browser, Navigator, 
    //  Paginator, Scroll,
  }
}

// -------------------------------------------------------------------------- //