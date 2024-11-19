import React, {useCallback, useEffect, useRef, useState } from 'react';

// -------------------------------------------------------------------------- //
// Layout - to select one option from the source list.
// -------------------------------------------------------------------------- //

const Container = props => {

  // initial data

  const {
    children, 
    rootRef, 
    src, 
    cursorIndexState,
    setCursorIndexState,
    value, 
    whenValueChange, 
    whenValueModify
  } = props;

  // input handling

  const handleClick = useCallback(
    (e) => {
      const el = e.target.closest("option");
      if(el) whenValueChange(el.value);
    },
    [whenValueChange]
  );

  // hooks 

  useEffect(() => {
    const select = rootRef.current;
    setCursorIndexState(value);
    if (select) select.addEventListener('mousedown', handleClick);
    return () => {
      if (select) select.removeEventListener('mousedown', handleClick);
    };
  }, [rootRef, handleClick, value]);

  // render

  return (
    <div>
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
    children, 
    label, 
    onKeyDown,
    setShownState, 
    matchingItems, 
    value
  } = props;
  const cssPrefix = `button`; 
  const currentItem = matchingItems?.find(item => item.id == value);
  const displayValue = currentItem?.label || value;

  // hooks 
  
  const onClick = (evt) => {
    evt.stopPropagation();
    setShownState(prev => !prev);
  }

  // render

  const updateProps = {className:cssPrefix, onClick, onKeyDown}
  return (
    <button {...updateProps}>
      <span className={`${cssPrefix}-label`}>{displayValue}</span>
      <span className={`${cssPrefix}-sprite`}>
        <i className={'fa-solid fa-chevron-down'}></i>
      </span>
    </button>
  );
}

// -------------------------------------------------------------------------- //
// Template - to create a gui by metadata.
// -------------------------------------------------------------------------- //

const Template = props => {          
  
  // initial data

  const {
    common, 
    item
  } = props;
  const {
    className, 
    cursorIndexState,
  } = common;
  
  // render

  return (
    <option 
      className={`${className.split(" ")[0]}-option`} 
      cursor={cursorIndexState == item.id ? "true" : null}
      onMouseDown={item?.onMouseDown} 
      value={item?.id}
    >
      {item.label||item.id}
    </option>
  );
}

export const Select ={Container, Controller, Template}

// -------------------------------------------------------------------------- //