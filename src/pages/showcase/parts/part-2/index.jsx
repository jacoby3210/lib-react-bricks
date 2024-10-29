import React, { useEffect, useRef, useState } from 'react';
import {GUI} from "/src/gui"
import { props } from "./config"
// ------------------------------------------------------------------------- //
// React Component  
// ------------------------------------------------------------------------- //

export const ExamplePart2 = () => {

  // initial data
  const areaRef = React.useRef(null)
	const TestAreaForScroll = () =>
		<div style={{ height: "100px", "overflowY": "scroll" }} ref={areaRef}>
	  		<div style={{ height: "200px" }} />
		</div>;

  const fsComponents = {
    AccordionExample: GUI.HOCs.withState("value")(GUI.Widgets.Accordion),
    BrowserExample: GUI.HOCs.withState("value")(
      (exampleProps) => <>
        <GUI.Widgets.Browser    {...props.browser} {...exampleProps}/>
        <GUI.Common.Repeater    {...props.viewForBrowser} from={exampleProps.value * 10}/>
      </>
    ),
    NavigatorExample: GUI.HOCs.withState("value")(
      (exampleProps) => <>
        <GUI.Widgets.Navigator  {...props.navigator} {...exampleProps}/>
        <GUI.Common.Repeater    {...props.viewForNavigator} from={exampleProps.value}/>
      </>
    ),
    // PaginatorExample: GUI.HOCs.withState("value")(
    //   (exampleProps) => <>
    //     <GUI.Widgets.Paginator  {...props.paginator} {...exampleProps}/>
    //     <GUI.Common.Repeater    {...props.viewForPaginator} from={exampleProps.value}/> 
    //   </>
    // ),
  }
	// render 
	return (
		<>

      <fsComponents.AccordionExample {...props.accordion}/>
      <fsComponents.BrowserExample value={0}/>
      <fsComponents.NavigatorExample value={0}/>
      {/* 
        
      <fsComponents.PaginatorExample value={0}/>

			<GUI.Widgets.Scroll {...props.scroll} target={areaRef}  />
			<TestAreaForScroll />  */}
		</>
	);
};

// ------------------------------------------------------------------------- //