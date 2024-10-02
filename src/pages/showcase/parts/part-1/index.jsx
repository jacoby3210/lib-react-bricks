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
      <GUI.Widgets.Dropout       {...props.popup}>
        <span>{"Its Popup!"}</span>
      </GUI.Widgets.Dropout>
      <GUI.Widgets.Empty/>
      <GUI.Widgets.Repeater     {...props.repeater}/> 
      
      {/* composition */}
      {/* <Components.Accordion   {...propValues.accordion} /> */}

      {/* controls */}
      <GUI.Widgets.CheckBox   value={false}/>
      <GUI.Widgets.Clicker   {...props.clicker}/>
      <GUI.Widgets.RadioBar  {...props.radioBar}/>
      <GUI.Widgets.Range     {...props.rangeHorizontal} />
      <GUI.Widgets.Range     {...props.rangeVertical} />
      <GUI.Widgets.Swing     {...props.swing} />

      {/* partials */}
      <GUI.Widgets.Select     {...props.select}/>
      <GUI.Widgets.Slider     {...props.slider} />

      {/* fields */}
      {/* <Components.Advisor {...propValues.advisor}/>
      <Components.Cloud {...propValues.cloud}/>
      <Components.Switcher {...propValues.select}/> */}
      
      {/* deprecated */}
      {/* <Components.Path {...propValues.path}/> */}
      {/* <Components.Timer {...propValues.timer}/> */}
      {/* <Components.Indicator   {...props.indicator}/> */}

    </>
  );
};

// ------------------------------------------------------------------------- //