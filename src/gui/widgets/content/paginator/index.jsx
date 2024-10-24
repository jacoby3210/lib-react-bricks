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
		value,
		whenValueChange,
	} = props;

  // render 
	const browserControllerProps = {
		src,
		value,
		whenValueChange,
	}

	const navigatorControllerProps = {
		valueMax: src.length, 
		length: src.length, 
		value,
		whenValueChange,
	}
	
	// render 

  return (
		<>
			<Navigator.Component {...navigatorControllerProps}/>
			<Browser.Component {...browserControllerProps}/>
		</>
	);

};

Component.propTypes = cfg.propTypes;
export const Paginator = {cfg, Component}

// ------------------------------------------------------------------------- //