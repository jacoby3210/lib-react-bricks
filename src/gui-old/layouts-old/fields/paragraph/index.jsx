import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as gCFG from "/src/gui/config"
// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix: "paragraph"});
gCFG.applyPackage(cfg, gCFG.propPackageValueText, {value: ""});

// -------------------------------------------------------------------------- //
// React component to display and edit multiline text (paragraph).
// -------------------------------------------------------------------------- //

export const Component = props => {
	// initial data
	const {
    children, rootRef,
		value, valueForbiddenChars, valueLengthMax, valueLengthMin, 
    whenValueChange, whenValueModify,
    ...attributes
	} = props;

	// input from user
  const handleChange = useCallback(
    (evt) => whenValueChange(evt.target.value), 
    [whenValueChange]
  );

	// render 
	const paragraphProps  = {
    ...attributes,
		onChange: handleChange,  
    value
	};

	return (<textarea  {...paragraphProps} />);
};

Component.propTypes = cfg.types;
export const Paragraph = {cfg, Component}

// -------------------------------------------------------------------------- //