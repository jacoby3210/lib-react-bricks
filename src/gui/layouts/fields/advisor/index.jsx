import React, { useEffect, useRef, useState } from 'react';
import * as cfg from "./config"
// ------------------------------------------------------------------------- //
// React component to show text line field with autocomplete suggestions.
// ------------------------------------------------------------------------- //

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

	// input from user
	const handleFocus = (evt) => {
		setCursorIndexState(0); 
		setShownState(true);
	}

	// render 
	const inputProps  = {
		className: `${cfg.CSS_CLASS_DEFAULT}-input`,
		onChange, onKeyDown, value
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

Component.propTypes = cfg.propTypes;
export const Advisor = {cfg, Component}

// ------------------------------------------------------------------------- //