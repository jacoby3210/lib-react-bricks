import React, { useCallback, useRef, useState } from 'react';
import * as gCFG from "/src/gui/config"
import * as code from "./code.jsx"
// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix: "advisor"});
gCFG.applyPackage(cfg, gCFG.propPackageSourceData, {filter: code.filter});
gCFG.applyPackage(cfg, gCFG.propPackageTemplate, {Template: code.TemplateDefault});
gCFG.applyPackage(cfg, gCFG.propPackageValueText, {value: ""});

// -------------------------------------------------------------------------- //
// React component to show text line field with autocomplete suggestions.
// -------------------------------------------------------------------------- //

export const Component = props => {
	// initial data
	const {
    children,
    rootRef,
		src, matchingItems, Template,
		value, whenValueChange, whenValueModify,
    shownState, setShownState,
    cursorIndexState, setCursorIndexState, onChange, onKeyDown, onMouseDown,
		...attributes
	} = props;

	// hooks
	const inputRef = useRef(null);
  const handleChange = useCallback(
    (evt) => whenValueChange(evt.target.value), 
    [whenValueChange]
  );

	// input from user
	const handleFocus = (evt) => {
		setCursorIndexState(0); 
		setShownState(true);
	}

	// render 
	const inputProps  = {
		className:  `${cfg.CSS_CLASS_DEFAULT}-input`,
		onChange:   handleChange, 
    onKeyDown, 
    value
	};

	const listProps = {
    className: `${cfg.CSS_CLASS_DEFAULT}-list`, 
    onMouseDown,
	} 

	return (
		<>
      {
        shownState 
        ? <>
            <input autoFocus ref={inputRef} {...inputProps} />
            <div {...listProps}>
              {children}
            </div>
          </> 
        : <input onFocus={handleFocus} {...inputProps} />
      }
    </>	
  );
};

Component.propTypes = cfg.types;
export const Advisor = {cfg, Component}

// -------------------------------------------------------------------------- //