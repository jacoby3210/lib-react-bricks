
import {GUI} from "@lib-react-bricks/src/modules/core"
import {props} from "./config";

// ------------------------------------------------------------------------- //
// Showcase Application Page.                                                //
// It is used to demonstrate the operation of components / layers / pages    //
// of the application in artificial conditions.                              //
// ------------------------------------------------------------------------- //

export const CoreLayoutsPage = () => {

	return (
		<div id="core-layouts">
      
      <GUI.Templates.Browser      { ... props.browser }/>
      <GUI.Templates.Gallery      { ... props.gallery }/>

		</div>
	);
};

// ------------------------------------------------------------------------- //