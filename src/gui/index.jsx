// ------------------------------------------------------------------------- //
// Header file for export module.
// ------------------------------------------------------------------------- //

// hocs
import * as HOC from "./components"
import * as Layouts from "./layouts"

// Compile widgets
const Container = HOC.withMergeProps(Layouts.Container.propValues) 
  (Layouts.Container.Component);
const Dropout 	= HOC.withMergeProps(Layouts.Dropout.propValues) 
  (HOC.withContainer(HOC.withPopup(Layouts.Dropout.Component)));
const Empty     = HOC.withMergeProps(Layouts.Empty.propValues)
  (Layouts.Empty.Component);
const Repeater  = HOC.withMergeProps(Layouts.Repeater.propValues)
  (HOC.withValue(HOC.withDataSource(Layouts.Repeater.Component)));

const CheckBox  = HOC.withMergeProps(Layouts.CheckBox.propValues) 
  (HOC.withValue(Layouts.CheckBox.Component));
const Clicker   = HOC.withMergeProps(Layouts.Clicker.propValues)  
  (HOC.withValue(Layouts.Clicker.Component));
const RadioBar  = HOC.withMergeProps(Layouts.RadioBar.propValues) 
  (HOC.withValue(HOC.withDataSource(Layouts.Container.Component)));
const Range     = HOC.withMergeProps(Layouts.Range.propValues)    
  (HOC.withValue(HOC.withValueNumber(Layouts.Range.Component)));
const Swing     = HOC.withMergeProps(Layouts.Swing.propValues)    
  (HOC.withValue(HOC.withValueNumber(HOC.withContainer(Layouts.Swing.Component))));

const Select 		= HOC.withMergeProps(Layouts.Select.propValues)	
  (HOC.withValue(HOC.withDataSource(HOC.withContainer(HOC.withPopup(Layouts.Select.Component)))));
const Slider 		= HOC.withMergeProps(Layouts.Slider.propValues)	
  (HOC.withValue(HOC.withValueNumber(HOC.withContainer(Layouts.Select.Component))));

// external module api
export const GUI = {
  HOC,    
  Widgets: {
    Container, Dropout, Empty, Repeater,
    CheckBox,  Clicker, RadioBar, Range, Swing,
    Select, Slider,
  }
 }

// ------------------------------------------------------------------------- //