import * as HOC from "./components"
import * as Layouts from "./layouts"
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
  (HOC.withValue(Layouts.Clicker.Component));
const RadioBar  = HOC.withMergeProps(Layouts.RadioBar.cfg.propValues) 
  (HOC.withValue(HOC.withDataSource(Layouts.RadioBar.Component)));
const Range     = HOC.withMergeProps(Layouts.Range.cfg.propValues)    
  (HOC.withValue(HOC.withValueNumber(Layouts.Range.Component)));
const Swing     = HOC.withMergeProps(Layouts.Swing.cfg.propValues)    
  (HOC.withValue(HOC.withValueNumber(HOC.withContainer(Layouts.Swing.Component))));

const Select     = HOC.withMergeProps(Layouts.Select.cfg.propValues)
  (HOC.withValue(HOC.withDataSource(HOC.withContainer(HOC.withPopup(Layouts.Select.Component)))));
const Slider     = HOC.withMergeProps(Layouts.Slider.cfg.propValues)
  (HOC.withValue(HOC.withValueNumber(HOC.withContainer(Layouts.Select.Component))));
const Switcher   = HOC.withMergeProps(Layouts.Switcher.cfg.propValues)
  (HOC.withValue(HOC.withContainer(Layouts.Switcher.Component)));

// external module api
export const GUI = {
  HOC,    
  Widgets: {
    Container, Dropout, Empty, Repeater,
    CheckBox,  Clicker, RadioBar, Range, Swing,
    Select, Slider, Switcher,
  }
 }

// ------------------------------------------------------------------------- //