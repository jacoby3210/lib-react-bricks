import {GUI} from "@lib-react-bricks/src/core/gui"
import {props} from "./config";

// -------------------------------------------------------------------------- //
// Showcase Page - components.   
// -------------------------------------------------------------------------- //

export const Components = () => {
  
  const {withDebugCompose, withState} = GUI.Native.HOCs; 
  const fsComponents = Object.fromEntries(
    Object.keys(GUI.Components).map(
      (key) => [key, withDebugCompose(withState("value"))(GUI.Components[key])]
    )
  )

  // render 
  return (
    <div id="common">
    
      {/* basics */}
      <GUI.Components.Button {...props.button}/>
      <fsComponents.Container/>
      <GUI.Components.Dropout  {...props.dropout}>{"Its Popup!"}</GUI.Components.Dropout>
      <fsComponents.Empty/>
      <fsComponents.List {...props.list}/>

      {/* controls */}
      <fsComponents.CheckBox  value={false}/>
      <fsComponents.Clicker   {...props.clicker}/>
      <fsComponents.Range     {...props.rangeHorizontal} />
      <fsComponents.Range     {...props.rangeVertical} />
      <fsComponents.Swing     {...props.swing} />
      <fsComponents.Bar       {...props.bar}/>

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