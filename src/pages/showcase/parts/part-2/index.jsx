import React, { useEffect, useRef, useState } from 'react';
import {GUI} from "/src/gui"
import { props } from "./config"
// ========================================================================= //
// React Component  
// ========================================================================= //

export const ExamplePart2 = receivedProps => {

	// hooks
	// const [currentBrowseTab, setBrowseTab] = useState(0);
	// const handleBrowseTab = (tabIndex) => { setBrowseTab(tabIndex * 10) }
	// const [currentNavigatorSlide, setCurrentNavigatorSlide] = useState(0);
	// const handleNavigatorSlide = (i) => {setCurrentNavigatorSlide(i);}
	// const [currentPageState, setCurrentPageState] = useState(0);
	// const handlePage = (i) => {setCurrentPageState(i * 10);}
	
	const areaRef = React.useRef(null)
	const TestAreaForScroll = () =>
		<div style={{ height: "100px", "overflowY": "scroll" }} ref={areaRef}>
	  		<div style={{ height: "200px" }} />
		</div>;

	// render 
	return (
		<>
			{/* <GUI.Widgets.Accordion {...props.accordion} />

			<GUI.Widgets.Browser {...props.browser} whenUpdateValueState={handleBrowseTab}/>
			<Components.View  {...props.viewForBrowser} from={currentBrowseTab}/>

			<GUI.Widgets.Navigator {...props.navigator} whenUpdateValueState={handleNavigatorSlide}/>
			<Components.View  {...props.viewForNavigator} from={currentNavigatorSlide}/>

			<GUI.Widgets.Paginator {...props.paginator} whenUpdateValueState={handlePage}/>
			<Components.View {...props.viewForPaginator} from={currentPageState}/> */}

			<GUI.Widgets.Scroll {...props.scroll} target={areaRef}  />
			<TestAreaForScroll />
		</>
	);
};