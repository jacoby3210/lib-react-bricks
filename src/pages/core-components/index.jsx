import {GUI} from "@lib-react-bricks/src/modules/core"
import {props} from "./config";

// -------------------------------------------------------------------------- //
// Showcase Application Page.                                                //
// It is used to demonstrate the operation of components / layers / pages    //
// of the application in artificial conditions.                              //
// -------------------------------------------------------------------------- //

export const CoreComponentsPage = props => {

  // initial data

  const {
    id, 
    ...attributes
  } = props;
    
  const fsComponents = Object.fromEntries(
    Object.keys(GUI.Components).map(
      (key) => [key, GUI.Components[key]]
    )
  )

  // render
  
  return (
    <section id={id} {...attributes}>
      {"Its alive"}
      <fsComponents.Container/>
      <GUI.Components.Dropout  {...props.dropout}>{"Its Popup!"}</GUI.Components.Dropout>

    </section>
  );
}

// -------------------------------------------------------------------------- //