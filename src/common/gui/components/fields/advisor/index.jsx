import React, { useCallback, useRef, useState } from 'react';

// -------------------------------------------------------------------------- //
// Layout - to show text line field with autocomplete suggestions.
// -------------------------------------------------------------------------- //

export const Container = props => {
  
  // initial data
	
  const {
    className, children, onKeyDown, onMouseDown,
    setCursorIndexState, 
    shownState, setShownState,
		value, whenValueChange,
	} = props;

	// hooks

	const inputRef = useRef(null);
  
  // input handling

  const handleChange = useCallback(
    (evt) => whenValueChange(evt.target.value), 
    [whenValueChange]
  );
  
	const handleFocus =  useCallback(
    (evt) => {setCursorIndexState(0); setShownState(true);},
    [shownState]
  )

	// render 
  
	const inputProps  = {
    className:`${className}-input`, 
    onChange: handleChange, 
    onKeyDown, value
  };
	const listProps = {className:`${className}-list`, onMouseDown,} 

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

export const Advisor = {Container, Template}

// -------------------------------------------------------------------------- //