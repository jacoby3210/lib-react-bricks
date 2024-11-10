import React from 'react';
import {GUI} from "@lib-react-bricks/src/common/gui"
import { props } from "./config"

// ------------------------------------------------------------------------- //
// React Component  
// ------------------------------------------------------------------------- //

export const Widgets = () => {

  // initial data
  
  const areaRef = React.useRef(null)
	const TestAreaForScroll = () =>
		<div style={{ height: "100px", "overflowY": "scroll" }} ref={areaRef}>
	  		<div style={{ height: "200px" }} />
		</div>;

  const fsComponents = {
    BrowserExample: GUI.Native.HOCs.withState("value")(
      (exampleProps) => <>
        <GUI.Widgets.Browser    {...props.browser} {...exampleProps}/>
        <GUI.Common.List        {...props.viewForBrowser} first={exampleProps.value * 10}/>
      </>
    ),
    NavigatorExample: GUI.Native.HOCs.withState("value")(
      (exampleProps) => <>
        <GUI.Widgets.Navigator  {...props.navigator} {...exampleProps}/>
        <GUI.Common.List        {...props.viewForNavigator} first={exampleProps.value}/>
      </>
    ),
    PaginatorExample: GUI.Native.HOCs.withState("value")(
      (exampleProps) => <>
        <GUI.Widgets.Paginator  {...props.paginator} {...exampleProps}/>
        <GUI.Common.List    {...props.viewForPaginator} first={exampleProps.value}/> 
      </>
    ),

    Accordion: GUI.Native.HOCs.withState("value")(GUI.Widgets.Accordion),
    CheckList: GUI.Native.HOCs.withState("value")(GUI.Widgets.CheckList),
    Inspector:        GUI.Native.HOCs.withState("value")(GUI.Widgets.Inspector)
    // Menu:      GUI.Native.HOCs.withState("value")(GUI.Widgets.Menu),
  }
  
	// render 

	return (
		<div id="widgets">

      <fsComponents.BrowserExample value={0}/>
      <fsComponents.NavigatorExample value={0}/>
      <fsComponents.PaginatorExample value={0}/>

			<GUI.Widgets.Scroll {...props.scroll} target={areaRef}  />
			<TestAreaForScroll />  
      
      <fsComponents.Accordion  {...props.accordion}/>
      <fsComponents.Accordion  {...props.accordionSingle}/>
      <fsComponents.CheckList  {...props.checklist}/>
      <fsComponents.Inspector {...props.inspector}/>
      {/* <fsComponents.Menu       {...props.menu}/> */}

		</div>
	);
};

// ------------------------------------------------------------------------- //