import React, { useCallback, useEffect, useRef, useState } from 'react';
import {Browser} from '../browser'
import {Navigator} from '../navigator'
import * as cfg from "./config";
// ------------------------------------------------------------------------- //
// React Component - switching of displayed content in the view by the page index. 
// ------------------------------------------------------------------------- //

export const Component = props => {

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