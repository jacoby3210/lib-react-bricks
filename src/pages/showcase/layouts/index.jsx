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
    BrowserExample: GUI.Native.HOCs.withState("value")(
      (exampleProps) => <>
        <GUI.Layouts.Display    {...props.browser} {...exampleProps}/>
        <GUI.Components.List    {...props.viewForBrowser} first={exampleProps.value * 10}/>
      </>
    ),
    NavigatorExample: GUI.Native.HOCs.withState("value")(
      (exampleProps) => <>
        <GUI.Layouts.Navigator  {...props.navigator} {...exampleProps}/>
        <GUI.Components.List    {...props.viewForNavigator} first={exampleProps.value}/>
      </>
    ),
    PaginatorExample: GUI.Native.HOCs.withState("value")(
      (exampleProps) => <>
        <GUI.Layouts.Paginator  {...props.paginator} {...exampleProps}/>
        <GUI.Components.List    {...props.viewForPaginator} first={exampleProps.value}/> 
      </>
    ),

    Accordion: GUI.Native.HOCs.withState("value")(GUI.Layouts.Accordion),
    CheckList: GUI.Native.HOCs.withState("value")(GUI.Layouts.CheckList),
    Inspector: GUI.Native.HOCs.withState("value")(GUI.Layouts.Inspector),
    Menu:      GUI.Native.HOCs.withState("value")(GUI.Layouts.Menu),
  }
  
	// render 

	return (
		<div id="Layouts">

      <fsComponents.BrowserExample value={0}/>
      <fsComponents.NavigatorExample value={0}/>
      <fsComponents.PaginatorExample value={0}/>

			<GUI.Layouts.Scroll {...props.scroll} target={areaRef}  />
			<TestAreaForScroll />  
      
      <fsComponents.Accordion  {...props.accordion}/>
      <fsComponents.Accordion  {...props.accordionSingle}/>
      <fsComponents.CheckList  {...props.checklist}/>
      <fsComponents.Inspector  {...props.inspector}/>
      <fsComponents.Menu       {...props.menu}/>

		</div>
	);
};

// ------------------------------------------------------------------------- //