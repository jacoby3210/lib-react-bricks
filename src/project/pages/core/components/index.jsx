import { GUI } from "@lib-react-bricks/src/modules/core";
import { props } from "./config";

// -------------------------------------------------------------------------- //
// Showcase Application Page.                                                //
// It is used to demonstrate the operation of components / layers / pages    //
// of the application in artificial conditions.                              //
// -------------------------------------------------------------------------- //

export const CoreComponentsPage = () => {
  return (
    <section id={"core-components"}>
      {"Its alive"}

      <GUI.Components.Container />
      <GUI.Components.Dropout {...props.dropout}>
        {"Its Popup!"}
      </GUI.Components.Dropout>
      <GUI.Components.Empty />
      <GUI.Components.List {...props.list} />

      <GUI.Components.CheckBox {...props.checkbox} />
      <GUI.Components.Clicker {...props.clicker} />
      <GUI.Components.Range {...props.rangeHorizontal} />
      <GUI.Components.Range {...props.rangeVertical} />
      <GUI.Components.Swing {...props.swing} />

      <GUI.Components.Advisor {...props.advisor} />
      <GUI.Components.Paragraph {...props.paragraph} />
      <GUI.Components.Select {...props.select} />
      <GUI.Components.Switcher {...props.switcher} />
      <GUI.Components.Text {...props.text} />
    </section>
  );
};

// -------------------------------------------------------------------------- //
