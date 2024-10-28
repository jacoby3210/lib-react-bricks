import React, { useCallback, useEffect, useRef, useState } from 'react';
import {Repeater} from "/src/gui/layouts"
import * as code from "./code";
import * as cfg from "./config";
// -------------------------------------------------------------------------- //
// React Component - represents list of headers and their associated ui blocks.
// -------------------------------------------------------------------------- //

const Component = props => {

	// initial data
	const {
		id,
		mode,
		src,
		value, whenValueChange,
		...attributes
	} = props;

	// input from user
	const handleToggle = useCallback((evt, index) => {
		const isShown = value.includes(index);
		if (isShown) {
			whenValueChange(value.filter(idx => idx !== index));
		} else {
      if (mode === 'single') whenValueChange([index]);
			else whenValueChange([...value, index]);
		}
		evt.stopPropagation();
	}, []);

	// render 
	const TemplateDefault = ({common, index, meta}) => {
    return <details open={value.includes(index)} mode={mode}>
        <summary onClick={(evt) => handleToggle(evt, index)} >
          {meta.caption}
        </summary>
        <p>{meta.content}</p>
      </details>;
  }

	const repeaterProps ={from:0, length: src.length, src, Template:TemplateDefault, value}
	return (<Repeater.Component id={id} {...attributes} {...repeaterProps}/>);
};

Component.propTypes = cfg.propTypes;
export const Accordion = {cfg, Component}

// -------------------------------------------------------------------------- //