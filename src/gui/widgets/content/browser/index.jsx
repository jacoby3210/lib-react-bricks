import React, { useCallback, useEffect, useRef, useState } from 'react';
import {Repeater} from "/src/gui/layouts"
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
	const firstDisplayButton = Math.max(
		Math.min(
			Math.max(value - Math.floor(length / 2), 0),
			src.length - length
	), 0);

	const Template = ({common, meta, index}) =>
		<button className= {`rc-browser-button`} onClick= {()=>whenValueChange(meta.id)}
			{...meta}
		>
			{meta?.caption || trueIndex}
		</button>;

	const repeaterProps = {
		from: 0, 
		length: src.length, 
		src, 
		Template,
	}
	return <Repeater.Component id={id} {...attributes} {...repeaterProps}/>;
};

Component.propTypes = cfg.propTypes;
export const Browser = {cfg, Component}

// ========================================================================= //