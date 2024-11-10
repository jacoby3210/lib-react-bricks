import {GUI} from "@lib-react-bricks/src/common/gui"
import {props} from "./config";

// -------------------------------------------------------------------------- //
// React Component  
// -------------------------------------------------------------------------- //

export const Common = () => {
  
  const fsComponents = {} 
  for (let key in GUI.Common)
    fsComponents[key] = GUI.Native.HOCs.withState("value")(GUI.Common[key]);

  // render 
  return (
    <>
    
      {/* basics */}
      <GUI.Common.Button {...props.button}/>
      <fsComponents.Container/>
      <fsComponents.Dropout  {...props.dropout}>{"Its Popup!"}</fsComponents.Dropout>
      <fsComponents.Empty/>
      <fsComponents.List {...props.list}/>

      {/* controls */}
      <fsComponents.CheckBox  value={false}/>
      <fsComponents.Clicker   {...props.clicker}/>
      <fsComponents.Range     {...props.rangeHorizontal} />
      <fsComponents.Range     {...props.rangeVertical} />
      <fsComponents.Swing     {...props.swing} />
      <fsComponents.Toggle    {...props.toggle}/>

      {/* fields */}
      <fsComponents.Advisor   {...props.advisor}/>
      <fsComponents.Paragraph {...props.paragraph}/>
      <fsComponents.Select    {...props.select}/>
      <fsComponents.Switcher  {...props.switcher}/> 
      <fsComponents.Text {...props.text}/>

      {/* partials */}
      {/* <fsComponents.Slider   {...props.slider}/> */}
      
    </>
  );
};

// -------------------------------------------------------------------------- //