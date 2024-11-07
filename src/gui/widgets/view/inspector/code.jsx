// import {Property} from "../ui/ui.js"
// import {Signature} from "signature.js"
import {Advisor, } from '/src/gui/layouts'
// -------------------------------------------------------------------------- //
// Widget - support functions to view/edit objects c JS (basic).
// -------------------------------------------------------------------------- //

	// no editable.

	const NoEditable = (props) => <span {...props} state-text={props["state-value"]}/>;
	
	// boolean.
	
  const Bool = (props) => <checkbox {...props} />;

	// number - .
	
  const Digit = (props) => <field {...props} max={"999"} min={"0"} placeholder={"float"} step={"1"}/>;
	
	// float.
	
  const Float = (props) => <field {...props} max={"999"} min={"0"} placeholder={"number2"} step={"0.1"}/>;

	// enum.
  
  const Select = (props) => <></>
	
  // single line text.

  const String = (props) => <></>
  const StringLoc = (props) => <></>

  // multiline text.

  const Text = (props) => <></>
  const TextLoc = (props) => <></>

  // export module api

  export const values = {
    NoEditable, Bool, Digit, Float, Select, String, Text, // Native
    StringLoc, TextLoc,                                   // Locale
  }

// -------------------------------------------------------------------------- //