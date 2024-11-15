import React, { useCallback, useRef, useState } from 'react';

// -------------------------------------------------------------------------- //
// Layout - to show text line field with autocomplete suggestions.
// -------------------------------------------------------------------------- //

const Container = props => {
  
  // initial data
	
  const {
    className, 
    children, 
    onKeyDown,
    onMouseDown,
	} = props;

	const listProps = {className:`${className}-list`, onMouseDown, onKeyDown} 

	return (
    <div {...listProps}>
      {children}
    </div>
  );
};

// -------------------------------------------------------------------------- //
// Layout - to show text line field with autocomplete suggestions.
// -------------------------------------------------------------------------- //

const Controller = props => {
  
  // initial data
	
  const {
    className, 
    onKeyDown, 
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
    (evt) => {setShownState(true);},
    [shownState]
  )

  const handleKeyDown = useCallback(
    (evt) => {onKeyDown(evt)},
    [shownState]
  )
	// render 

  const inputProps  = {
    className:`${className}-input`, 
    onChange: handleChange, 
    onFocus: handleFocus,
    onKeyDown: handleKeyDown, 
    value
  };

	return (<input ref={inputRef} {...inputProps} />);
};

// -------------------------------------------------------------------------- //
// Template - to create a gui by metadata.
// -------------------------------------------------------------------------- //

const Template = (props) => {
  
	// initial data

  const {common, item, index} = props;
  const {className, cursorIndexState} = common;
  const {caption} = item;

	// render 

  return (
		<option 
      className={`${className.split(" ")[0]}-option`} 
      cursor={cursorIndexState == index ? "true" : null}
			value={caption}
		>
			{caption}
		</option>
	)
};

export const Advisor = {Controller, Container, Template,
}

// -------------------------------------------------------------------------- //