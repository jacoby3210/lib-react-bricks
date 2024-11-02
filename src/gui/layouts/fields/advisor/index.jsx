import React, { useCallback, useRef, useState } from 'react';
import * as gCFG from "/src/gui/config"
import { TemplateDefault as Template , filter} from './code'; 
// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix: "advisor"});
gCFG.applyPackage(cfg, gCFG.propPackageSourceData, {filter});
gCFG.applyPackage(cfg, gCFG.propPackageValueText, {value: ""});

// -------------------------------------------------------------------------- //
// React component to show text line field with autocomplete suggestions.
// -------------------------------------------------------------------------- //

export const Component = props => {
  
  // initial data
	
  const {
    children,
    rootRef,
    revealsState, setRevealsState,
		src, matchingItems, Template,
		value, whenValueChange, whenValueModify,
    cursorIndexState, setCursorIndexState, 
    onKeyDown, onMouseDown,
		...attributes
	} = props;

	// hooks

	const inputRef = useRef(null);
  
  // input handling

  const onChange = useCallback(
    (evt) => whenValueChange(evt.target.value), 
    [whenValueChange]
  );
  
	const onFocus =  useCallback(
    (evt) => {setCursorIndexState(0); setRevealsState(true);},
    [revealsState]
  )

	// render 
  
	const inputProps  = {
		className:  `${cfg.CSS_CLASS_DEFAULT}-input`,
		onChange, 
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
        revealsState 
        ? <>
            <input autoFocus ref={inputRef} {...inputProps} />
            <div {...listProps}>
			        {children}
            </div>
          </> 
        : <input onFocus={onFocus} {...inputProps} />
      }
    </>	
  );
};

Component.propTypes = cfg.types;
export const Advisor = {cfg, Component, Template}

// -------------------------------------------------------------------------- //