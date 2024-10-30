import React, { useCallback, useEffect, useRef, useState } from 'react';
import {Repeater} from "/src/gui/layouts"
import * as gCFG  from "/src/gui/config"
import * as code  from "./code.jsx"
// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix: "browser"});
gCFG.applyPackage(cfg, gCFG.propPackageSourceData, {});
gCFG.applyPackage(cfg, gCFG.propPackageTemplate, {Template: code.TemplateDefault});
gCFG.applyPackage(cfg, gCFG.propPackageValueNumber, {value: 0});

// -------------------------------------------------------------------------- //
// React Component - switching of displayed content in the view by special id.
// -------------------------------------------------------------------------- //

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
  console.log(props, repeaterProps)
	return <Repeater.Component {...props} {...repeaterProps}/>;
};

Component.propTypes = cfg.types;
export const Browser = {cfg, Component}

// -------------------------------------------------------------------------- //