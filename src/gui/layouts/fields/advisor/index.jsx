import React, { useCallback, useRef, useState } from 'react';
import * as gCFG from "@lib-react-bricks/src/gui/config"

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
    children, rootRef, onKeyDown, onMouseDown,
    cursorIndexState, setCursorIndexState, 
    revealsState, setRevealsState,
		value, whenValueChange, whenValueModify,
	} = props;

	// hooks

	const inputRef = useRef(null);
  
  // input handling

  const handleChange = useCallback(
    (evt) => whenValueChange(evt.target.value), 
    [whenValueChange]
  );
  
	const handleFocus =  useCallback(
    (evt) => {setCursorIndexState(0); setRevealsState(true);},
    [revealsState]
  )

	// render 
  
  const className = (postfix) => ({className: `${cfg.CSS_CLASS_DEFAULT}-${postfix}`})
	const inputProps  = {...className(`input`), onChange: handleChange, onKeyDown, value};
	const listProps = {...className(`list`), onMouseDown,} 

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
        : <input onFocus={handleFocus} {...inputProps} />
      }
    </>	
  );
};

// -------------------------------------------------------------------------- //
// Template - to create a gui by metadata.
// -------------------------------------------------------------------------- //

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