import { useCallback, useRef, useState } from 'react';
import { useCursor } from '../../../advanced/markup/cursor';
import { useReveals } from '../../../advanced/markup/reveals';

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
		value, 
    whenValueChange,
	} = props;
  
	const reveals = useReveals();

	// hooks

	const inputRef = useRef(null);
  
  // input handling

  const handleChange = useCallback(
    (evt) => whenValueChange(evt.target.value), 
    [value, whenValueChange]
  );
  
	const handleClick =  useCallback(
    (evt) => {evt.stopPropagation();},
    [reveals]
  )
  
	const handleFocus =  useCallback(
    (evt) => {reveals.dispatch({type:"SHOW"})},
    [reveals]
  )

  const handleKeyDown = useCallback(
    (evt) => {onKeyDown(evt)},
    [reveals]
  )

	// render 

  const inputProps  = {
    className:`${className}-input`, 
    onChange:   handleChange, 
    onClick:    handleClick,
    onFocus:    handleFocus,
    onKeyDown:  handleKeyDown, 
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
  const {className} = common;
	const cursor = useCursor();

	// render 

  return (
		<option 
      className={`${className.split(" ")[0]}-option`} 
      cursor={cursor.state.index == index ? "true" : null}
			value={item.value}
		>
			{item.value}
		</option>
	)
};

export const Advisor = {
  Controller, 
  Container, 
  Template,
}

// -------------------------------------------------------------------------- //