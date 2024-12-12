import { Core } from "@lib-react-bricks/src/modules/core";
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

      <Core.Components.Container />
      <Core.Components.Dropout {...props.dropout}>
        {"Its Popup!"}
      </Core.Components.Dropout>
      <Core.Components.Empty />
      <Core.Components.List {...props.list} />

      <Core.Components.CheckBox {...props.checkbox} />
      <Core.Components.Clicker {...props.clicker} />
      <Core.Components.Range {...props.rangeHorizontal} />
      <Core.Components.Range {...props.rangeVertical} />
      <Core.Components.Swing {...props.swing} />

      <Core.Components.Advisor {...props.advisor} />
      <Core.Components.Paragraph {...props.paragraph} />
      <Core.Components.Select {...props.select} />
      <Core.Components.Switcher {...props.switcher} />
      <Core.Components.Text {...props.text} />
    </section>
  );
};

// -------------------------------------------------------------------------- //
