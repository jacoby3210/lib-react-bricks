import {GUI} from "/src/gui"
import {props} from "./config";
// ------------------------------------------------------------------------- //
// React Component  
// ------------------------------------------------------------------------- //

export const ExamplePart1 = receivedProps => {
  
  return (
    <>
      {/* basics */}
      <GUI.Common.Container/>
      <GUI.Common.Dropout  {...props.popup}>{"Its Popup!"}</GUI.Common.Dropout>
      <GUI.Common.Empty/>
      <GUI.Common.Repeater {...props.repeater}/> 

      {/* controls */}
      <GUI.Common.CheckBox value={false}/>
      <GUI.Common.Clicker  {...props.clicker}/>
      <GUI.Common.RadioBar {...props.radioBar}/>
      <GUI.Common.Range    {...props.rangeHorizontal} />
      <GUI.Common.Range    {...props.rangeVertical} />
      <GUI.Common.Swing    {...props.swing} />

      {/* fields */}
      <GUI.Common.Advisor  {...props.advisor}/>
      <GUI.Common.Select   {...props.select}/>
      <GUI.Common.Switcher {...props.select}/> 

      {/* partials */}
      {/* <GUI.Common.Cloud    {...props.cloud}/> */}
      <GUI.Common.Slider   {...props.slider}/>
      
      {/* deprecated */}
      {/* <GUI.Common.Accordion   {...propValues.accordion} /> */}
      {/* <GUI.Common.Path {...propValues.path}/> */}
      {/* <GUI.Common.Timer {...propValues.timer}/> */}
      {/* <GUI.Common.Indicator   {...props.indicator}/> */}

    </>
  );
};

// ------------------------------------------------------------------------- //