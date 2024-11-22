import React from 'react';
import {GUI} from "@lib-react-bricks/src/core/gui"
import { props } from "./config"

// ------------------------------------------------------------------------- //
// Showcase Page - layouts.  
// ------------------------------------------------------------------------- //

export const Layouts = () => {

  // initial data
  
  const {withDebugCompose, withState} = GUI.Native.HOCs; 

  const areaRef = React.useRef(null)
	const TestAreaForScroll = () =>
		<div style={{ height: "100px", "overflowY": "scroll" }} ref={areaRef}>
	  		<div style={{ height: "200px" }} />
		</div>;
  
  const fsLayouts = Object.fromEntries(
    Object.keys(GUI.Layouts).map(
      (key) => [key, withDebugCompose(withState("value"))(GUI.Layouts[key])]
    )
  )

  const fsTemplates = Object.fromEntries(
    Object.keys(GUI.Templates).map(
      (key) => [key, withDebugCompose(withState("value"))(GUI.Templates[key])]
    )
  )

  // render 

	return (
		<div id="layouts">

			<GUI.Layouts.Scroll {...props.scroll} target={areaRef}  />
			<TestAreaForScroll />  

      <fsLayouts.Accordion  {...props.accordion}/>
      <fsLayouts.Accordion  {...props.accordionSingle}/>
      <fsLayouts.CheckList  {...props.checklist}/>
      <fsLayouts.Inspector  {...props.inspector}/>
      <fsLayouts.Menu       {...props.menu}/>

      <fsTemplates.Browser {...props.browser}/>
      <fsTemplates.Catalog {...props.catalog}/>
      <fsTemplates.Gallery {...props.gallery}/>

		</div>
	);
};

// ------------------------------------------------------------------------- //