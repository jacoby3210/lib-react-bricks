import {GUI} from "/src/gui"
import {props} from "./config";
// -------------------------------------------------------------------------- //
// React Component  
// -------------------------------------------------------------------------- //

export const GroupBasics = () => {
  
  const fsComponents = {} 
  for (let key in GUI.Common)
    fsComponents[key] = 
  // GUI.HOCs.withState("value")(
    GUI.Common[key]
  // );

  return (
    <>
      {/* basics */}
      <fsComponents.List {...props.list}/>
      {/* <fsComponents.Container/> */}
      {/* <fsComponents.Dropout  {...props.popup}>{"Its Popup!"}</fsComponents.Dropout> */}
      {/* <fsComponents.Empty/> */}
      {/* <fsComponents.Repeater {...props.repeater}/>  */}

      {/* controls */}
      {/* <fsComponents.CheckBox  value={false}/> */}
      {/* <fsComponents.Clicker   {...props.clicker}/> */}
      {/* <fsComponents.RadioBar  {...props.radioBar}/> */}
      {/* <fsComponents.Range     {...props.rangeHorizontal} /> */}
      {/* <fsComponents.Range     {...props.rangeVertical} /> */}
      {/* <fsComponents.Swing     {...props.swing} /> */}

      {/* fields */}
      {/* <fsComponents.Advisor   {...props.advisor}/> */}
      {/* <fsComponents.Paragraph {...props.paragraph}/> */}
      {/* <fsComponents.Select    {...props.select}/> */}
      {/* <fsComponents.Switcher  {...props.switcher}/>  */}

      {/* partials */}
      {/* <fsComponents.Cloud    {...props.cloud}/> */}
      {/* <fsComponents.Slider   {...props.slider}/> */}
      
    </>
  );
};

// -------------------------------------------------------------------------- //