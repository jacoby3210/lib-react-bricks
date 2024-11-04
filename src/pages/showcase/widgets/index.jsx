import React, { useEffect, useRef, useState } from 'react';
import {GUI} from "/src/gui"
import { props } from "./config"
import { CheckBox } from '../../../gui/layouts';

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
    BrowserExample: GUI.HOCs.withState("value")(
      (exampleProps) => <>
        <GUI.Widgets.Browser    {...props.browser} {...exampleProps}/>
        <GUI.Common.List        {...props.viewForBrowser} first={exampleProps.value * 10}/>
      </>
    ),
    NavigatorExample: GUI.HOCs.withState("value")(
      (exampleProps) => <>
        <GUI.Widgets.Navigator  {...props.navigator} {...exampleProps}/>
        <GUI.Common.List        {...props.viewForNavigator} first={exampleProps.value}/>
      </>
    ),
    PaginatorExample: GUI.HOCs.withState("value")(
      (exampleProps) => <>
        <GUI.Widgets.Paginator  {...props.paginator} {...exampleProps}/>
        <GUI.Common.List    {...props.viewForPaginator} first={exampleProps.value}/> 
      </>
    ),

    AccordionExample: GUI.HOCs.withState("value")(GUI.Widgets.Accordion),
    CheckListExample: GUI.HOCs.withState("value")(GUI.Widgets.CheckList)
  }
	// render 

	return (
		<>

      <fsComponents.BrowserExample value={0}/>
      <fsComponents.NavigatorExample value={0}/>
      <fsComponents.PaginatorExample value={0}/>

			<GUI.Widgets.Scroll {...props.scroll} target={areaRef}  />
			<TestAreaForScroll />  
      
      <fsComponents.AccordionExample {...props.accordion}/>
      <fsComponents.AccordionExample {...props.accordionSingle}/>
      <fsComponents.CheckListExample {...props.checklist}/>

		</>
	);
};

// ------------------------------------------------------------------------- //