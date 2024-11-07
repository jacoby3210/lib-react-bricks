import React from 'react';
import {GUI} from "@lib-react-bricks/src/gui"
import { props } from "./config"

// ------------------------------------------------------------------------- //
// React Component  
// ------------------------------------------------------------------------- //

export const Workflows = () => {

  // initial data
  
  const fsComponents = {
    Inspector: GUI.Widgets.Inspector
  }
  
	// render 

	return (
		<>
      <fsComponents.Inspector {...props.inspector}/>
		</>
	);
};

// ------------------------------------------------------------------------- //