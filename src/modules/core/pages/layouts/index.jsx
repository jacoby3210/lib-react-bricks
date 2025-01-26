import { useRef } from "react";
import { Core } from "/src/modules/core";
import { props } from "./config";

// ------------------------------------------------------------------------- //
// Showcase Application Page.                                                //
// It is used to demonstrate the operation of components / layers / pages    //
// of the application in artificial conditions.                              //
// ------------------------------------------------------------------------- //

export const PageCoreLayouts = () => {
  const areaRef = useRef(null);
  const TestAreaForScroll = () => (
    <div style={{ height: "100px", overflowY: "scroll" }} ref={areaRef}>
      <div style={{ height: "200px" }} />
    </div>
  );

  return (
    <div id='core-layouts'>
      <Core.Layouts.Path value={"\\core\\layouts\\index.html"} />
      {/* <Core.Layouts.Scroll {...props.scroll} target={areaRef} />
      <TestAreaForScroll />

      <Core.Templates.Browser {...props.browser} />
      <Core.Templates.Gallery {...props.gallery} />
      <Core.Templates.Catalog {...props.catalog} />

      <Core.Layouts.Accordion {...props.accordion} />
      <Core.Layouts.Accordion {...props.accordionSingle} />
      <Core.Layouts.Bar {...props.bar} />

      <Core.Layouts.CheckList {...props.checklist} />
      <Core.Layouts.Inspector {...props.inspector} />
      <Core.Layouts.Menu {...props.menu} /> */}
    </div>
  );
};

// ------------------------------------------------------------------------- //
