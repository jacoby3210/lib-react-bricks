import React, { useCallback, useRef, useState } from 'react';
import * as gCFG from "/src/gui/config"

// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

function filter(item) {
  return item.caption != this.value && item.caption.includes(this.value);
}

const cfg = gCFG.createConfig({postfix: "advisor"});
gCFG.applyPackage(cfg, gCFG.propPackageSourceData, {filter});
gCFG.applyPackage(cfg, gCFG.propPackageValueText, {value: ""});

// -------------------------------------------------------------------------- //
// Layout - to show text line field with autocomplete suggestions.
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

// template for forming a gui by metadata.
const Template = (props) => {
  
	// initial data

  const {common, item, index} = props;

	// render 
	
  return (
		<option 
      className={`${common.className.split(" ")[0]}-option`} 
      cursor={common.cursorIndexState == index ? "true" : null}
			value={item.caption}
		>
			{item.caption}
		</option>
	)
};
Component.propTypes = cfg.types;
export const Advisor = {cfg, Component, Template}

// -------------------------------------------------------------------------- //