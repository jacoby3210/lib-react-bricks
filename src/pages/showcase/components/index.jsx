import {GUI} from "@lib-react-bricks/src/common/gui"
import {props} from "./config";

// -------------------------------------------------------------------------- //
// Showcase Page - components.   
// -------------------------------------------------------------------------- //

export const Components = () => {
  
  const fsComponents = {} 
  for (let key in GUI.Components)
    fsComponents[key] = GUI.Native.HOCs.withState("value")(GUI.Components[key]);

  // render 
  return (
    <div id="common">
    
      {/* basics */}
      <GUI.Components.Button {...props.button}/>
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
      <fsComponents.Text      {...props.text}/>

    </div>
  );
};

// -------------------------------------------------------------------------- //