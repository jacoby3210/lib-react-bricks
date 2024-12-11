import { useRef } from "react";
import { GUI } from "@lib-react-bricks/src/modules/core";
import { props } from "./config";

// ------------------------------------------------------------------------- //
// Showcase Application Page.                                                //
// It is used to demonstrate the operation of components / layers / pages    //
// of the application in artificial conditions.                              //
// ------------------------------------------------------------------------- //

export const CoreLayoutsPage = () => {
  const areaRef = useRef(null);
  const TestAreaForScroll = () => (
    <div style={{ height: "100px", overflowY: "scroll" }} ref={areaRef}>
      <div style={{ height: "200px" }} />
    </div>
  );

  return (
    <div id='core-layouts'>
      <GUI.Layouts.Scroll {...props.scroll} target={areaRef} />
      <TestAreaForScroll />

      <GUI.Templates.Browser {...props.browser} />
      <GUI.Templates.Gallery {...props.gallery} />
      <GUI.Templates.Catalog {...props.catalog} />

      <GUI.Layouts.Accordion {...props.accordion} />
      <GUI.Layouts.Accordion {...props.accordionSingle} />
      <GUI.Layouts.Bar {...props.bar} />

      <GUI.Layouts.CheckList {...props.checklist} />
      <GUI.Layouts.Inspector {...props.inspector} />
      <GUI.Layouts.Menu {...props.menu} />
    </div>
  );
};

// ------------------------------------------------------------------------- //
