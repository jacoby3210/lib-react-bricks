import React, { useCallback, useEffect, useRef, useState } from 'react';
import {Repeater} from "/src/gui/layouts"
import * as code from "./code";
import * as cfg from "./config";
// ========================================================================= //
// React Component - control switching the displayed content in the view.
// ========================================================================= //

export const Component = props => {

	// initial data
	const {
		id,
		length,
		src,
		value,
		whenValueChange,
		...attributes
	} = props;
	
	// render 

	const repeaterProps = {
		from: 0, 
		length: src.length, 
		src, 
		Template: code.TemplateDefault,
	}
	return <Repeater.Component {...props} {...repeaterProps}/>;
};

Component.propTypes = cfg.propTypes;
export const Browser = {cfg, Component}

// ========================================================================= //