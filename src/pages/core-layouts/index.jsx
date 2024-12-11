import { GUI } from "@lib-react-bricks/src/modules/core";
import { props } from "./config";

// ------------------------------------------------------------------------- //
// Showcase Application Page.                                                //
// It is used to demonstrate the operation of components / layers / pages    //
// of the application in artificial conditions.                              //
// ------------------------------------------------------------------------- //

export const CoreLayoutsPage = () => {
  return (
    <div id='core-layouts'>
      <GUI.Templates.Browser {...props.browser} />
      <GUI.Templates.Gallery {...props.gallery} />
      <GUI.Templates.Catalog {...props.catalog} />

      <GUI.Layouts.Accordion {...props.accordion} />
      <GUI.Layouts.Accordion {...props.accordionSingle} />

      <GUI.Layouts.CheckList {...props.checklist} />
      <GUI.Layouts.Inspector {...props.inspector} />
    </div>
  );
};

// ------------------------------------------------------------------------- //
