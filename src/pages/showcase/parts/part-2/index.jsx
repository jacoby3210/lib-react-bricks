import React, { useEffect, useRef, useState } from 'react';
import {GUI} from "/src/gui"
import { props } from "./config"
// ========================================================================= //
// React Component  
// ========================================================================= //

export const ExamplePart2 = () => {

  // initial data
  const areaRef = React.useRef(null)
	const TestAreaForScroll = () =>
		<div style={{ height: "100px", "overflowY": "scroll" }} ref={areaRef}>
	  		<div style={{ height: "200px" }} />
		</div>;

	// hooks
	const [currentBrowserTab, setBrowserTab] = useState(0);
	const handleBrowserTab = (tabIndex) => {setBrowserTab(tabIndex * 10);}
	const [currentNavigatorSlide, setCurrentNavigatorSlide] = useState(0);
	const handleNavigatorSlide = (i) => {setCurrentNavigatorSlide(i); return i;}

	const [currentPageState, setCurrentPageState] = useState(0);
	const handlePage = (i) => {setCurrentPageState(i);}

	// render 
	return (
		<>

      <GUI.Widgets.Accordion {...props.accordion} />
       
			<GUI.Widgets.Browser    {...props.browser} whenValueChange={handleBrowserTab}   value={currentBrowserTab}/>
			<GUI.Common.Repeater    {...props.viewForBrowser} from={currentBrowserTab}/>

			<GUI.Widgets.Navigator  {...props.navigator} whenValueChange={handleNavigatorSlide} value={currentNavigatorSlide}/>
			<GUI.Common.Repeater    {...props.viewForNavigator} from={currentNavigatorSlide}/>

			<GUI.Widgets.Paginator  {...props.paginator} whenValueChange={handlePage}  value={currentPageState}/>
			<GUI.Common.Repeater    {...props.viewForPaginator} from={currentPageState}/> 

			<GUI.Widgets.Scroll {...props.scroll} target={areaRef}  />
			<TestAreaForScroll /> 
		</>
	);
};