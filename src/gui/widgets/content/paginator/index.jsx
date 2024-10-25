import React, { useCallback, useEffect, useRef, useState } from 'react';
import {Browser} from '../browser'
import {Navigator} from '../navigator'
import * as cfg from "./config";
// ------------------------------------------------------------------------- //
// React Component - switching of displayed content in the view by the page index. 
// ------------------------------------------------------------------------- //

export const Component = props => {

  // initial data
	const {
    src,
		value, valueMax, valueStep,
		whenValueChange,
		whenValueModify,
	} = props;

  // render 
	const browserControllerProps = {
    src,
		value,
    valueMax, 
    valueStep,
		whenValueChange,
	}

	const navigatorControllerProps = {
    value,
		valueMax,    
    valueStep,
		whenValueChange,
		whenValueModify,
	}
  console.log("Paginator",navigatorControllerProps);
	
	// render 
  return (
		<>
			<Navigator.Component {...props}/>
			<Browser.Component {...props}/>
		</>
	);

};

Component.propTypes = cfg.propTypes;
export const Paginator = {cfg, Component}

// ------------------------------------------------------------------------- //