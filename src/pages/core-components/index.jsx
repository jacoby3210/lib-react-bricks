import {GUI} from "@lib-react-bricks/src/modules/core"
import {props} from "./config";

// -------------------------------------------------------------------------- //
// Showcase Application Page.                                                //
// It is used to demonstrate the operation of components / layers / pages    //
// of the application in artificial conditions.                              //
// -------------------------------------------------------------------------- //

export const CoreComponentsPage = () => {

  // initial data
    
  const fsComponents = Object.fromEntries(
    Object.keys(GUI.Components).map(
      (key) => [key, GUI.Components[key]]
    )
  )

  // render
  
  return (
    <section id={"core-components"}>
      
      {"Its alive"}

      <fsComponents.Container/>
      <GUI.Components.Dropout { ... props.dropout }>
        {"Its Popup!"}
      </GUI.Components.Dropout>
      <fsComponents.Empty/>
      <fsComponents.List      { ... props.list }/>

      <fsComponents.Bar       { ... props.bar }/>
      <fsComponents.CheckBox  { ... props.checkbox }/>
      <fsComponents.Clicker   { ... props.clicker }/>
      <fsComponents.Range     { ... props.rangeHorizontal }/>
      <fsComponents.Range     { ... props.rangeVertical }/>
      <fsComponents.Swing     { ... props.swing }/>

      <fsComponents.Advisor   { ... props.advisor }/>
      <fsComponents.Paragraph { ... props.paragraph }/>
      <fsComponents.Select    { ... props.select }/>
      <fsComponents.Switcher  { ... props.switcher }/>
      <fsComponents.Text      { ... props.text }/>

    </section>
  );
}

// -------------------------------------------------------------------------- //