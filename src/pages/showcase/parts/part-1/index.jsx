import {GUI} from "/src/gui"
import {defaultProps as props} from "./config";
// ------------------------------------------------------------------------- //
// React Component  
// ------------------------------------------------------------------------- //

export const ExamplePart1 = receivedProps => {
  
  return (
    <>
      {/* basics */}
      <GUI.Widgets.Container/>
      <GUI.Widgets.Dropout  {...props.popup}>{"Its Popup!"}</GUI.Widgets.Dropout>
      <GUI.Widgets.Empty/>
      <GUI.Widgets.Repeater {...props.repeater}/> 

      {/* controls */}
      <GUI.Widgets.CheckBox value={false}/>
      <GUI.Widgets.Clicker  {...props.clicker}/>
      <GUI.Widgets.RadioBar {...props.radioBar}/>
      <GUI.Widgets.Range    {...props.rangeHorizontal} />
      <GUI.Widgets.Range    {...props.rangeVertical} />
      <GUI.Widgets.Swing    {...props.swing} />

      {/* fields */}
      <GUI.Widgets.Advisor  {...props.advisor}/>
      <GUI.Widgets.Select   {...props.select}/>
      <GUI.Widgets.Switcher {...props.select}/> 

      {/* partials */}
      {/* <GUI.Widgets.Cloud    {...props.cloud}/> */}
      <GUI.Widgets.Slider   {...props.slider}/>
      
      {/* deprecated */}
      {/* <GUI.Widgets.Accordion   {...propValues.accordion} /> */}
      {/* <GUI.Widgets.Path {...propValues.path}/> */}
      {/* <GUI.Widgets.Timer {...propValues.timer}/> */}
      {/* <GUI.Widgets.Indicator   {...props.indicator}/> */}

    </>
  );
};

// ------------------------------------------------------------------------- //