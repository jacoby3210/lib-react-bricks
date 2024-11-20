import React from 'react';
import {GUI} from "@lib-react-bricks/src/common/gui"
import { props } from "./config"

// ------------------------------------------------------------------------- //
// Showcase Page - layouts.  
// ------------------------------------------------------------------------- //

export const Layouts = () => {

  // initial data
  
  const areaRef = React.useRef(null)
	const TestAreaForScroll = () =>
		<div style={{ height: "100px", "overflowY": "scroll" }} ref={areaRef}>
	  		<div style={{ height: "200px" }} />
		</div>;

  const fsComponents = {

    Browser: 
      GUI.Native.HOCs.withState("value")
      (GUI.Templates.Browser),

    Catalog: 
      GUI.Native.HOCs.withState("value")
      (GUI.Templates.Catalog),
      
    Gallery: 
      GUI.Native.HOCs.withState("value")
      (GUI.Templates.Gallery),

    Accordion: 
      GUI.Native.HOCs.withState("value")
      (GUI.Layouts.Accordion),
    // CheckList: 
      // GUI.Native.HOCs.withState("value")
      // (GUI.Layouts.CheckList),
    // Inspector: 
      // GUI.Native.HOCs.withState("value")
      // (GUI.Layouts.Inspector),
    // Menu:      
      // GUI.Native.HOCs.withState("value")
      // (GUI.Layouts.Menu),
  }
  
	// render 

	return (
		<div id="Layouts">

      <fsComponents.Browser {...props.browser}/>
      <fsComponents.Catalog {...props.catalog}/>
      <fsComponents.Gallery {...props.gallery}/>

			<GUI.Layouts.Scroll {...props.scroll} target={areaRef}  />
			<TestAreaForScroll />  
{/*       
      <fsComponents.Accordion  {...props.accordion}/>
      <fsComponents.Accordion  {...props.accordionSingle}/>
      <fsComponents.CheckList  {...props.checklist}/>
      <fsComponents.Inspector  {...props.inspector}/>
      <fsComponents.Menu       {...props.menu}/> */}

		</div>
	);
};

// ------------------------------------------------------------------------- //