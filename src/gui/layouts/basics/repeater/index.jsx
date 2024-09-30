import React, { useEffect, useMemo, useRef, useState } from 'react';
import {CSS_CLASS_DEFAULT, propValues, propTypes } from "./config"
// ------------------------------------------------------------------------- //
// React component to render multiple items from a source in a template.
// ------------------------------------------------------------------------- //

export const Component = props => {

	// initial data
	const {
		id,
		from,
		length,
		src,
		TemplateItem,
		templateItemProps,
	} = props;

	// render
	const children = src.slice(from, from + length).map(
		(item, i) => 
			<TemplateItem 
				className={`${CSS_CLASS_DEFAULT}-item`} 
				index={i}
				key={item.id || i}
				meta={item} 
				props={templateItemProps}
		/>);
	
	return (children);
};

Component.propTypes = propTypes;
export const Repeater = {Component, propValues}

// ------------------------------------------------------------------------- //