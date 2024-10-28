import React, { useEffect, useRef, useState } from 'react';
import * as gCFG from "/src/gui/config"
// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix: "advisor"});
gCFG.applyPackage(cfg, gCFG.propPackageValueText, {value: ""});

// -------------------------------------------------------------------------- //
// React component to display and edit multiline text (paragraph).
// -------------------------------------------------------------------------- //

export const Component = props => {
	// initial data
	const {
    children, rootRef,
		value, whenValueChange, whenValueModify,
	} = props;

	// hooks
	const inputRef = useRef(null);

	// input from user
	const handleFocus = (evt) => {
		setCursorIndexState(0); 
		setShownState(true);
	}

	// render 
	const inputProps  = {
		className: `${cfg.CSS_CLASS_DEFAULT}-input`,
		// onChange, onKeyDown, 
    value
	};

	return (
		<>
      {
        <textarea onFocus={handleFocus} {...inputProps} />
      }
    </>	
  );
};

Component.propTypes = cfg.propTypes;
export const Paragraph = {cfg, Component}

// -------------------------------------------------------------------------- //