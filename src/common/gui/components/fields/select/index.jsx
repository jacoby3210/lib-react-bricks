import React, {useEffect, useRef, useState } from 'react';
import {Dropout} from '@lib-react-bricks/src/common/gui/components'

// -------------------------------------------------------------------------- //
// Layout - to select one option from the source list.
// -------------------------------------------------------------------------- //

const Container = props => {

  // initial data

  const {
    children, 
    rootRef, 
    src, 
    value, whenValueChange, whenValueModify
  } = props;


  // input handling

  const handleClick = (e) => {
    const el = e.target.closest("option");
    if(el) whenValueChange(el.value)
  }

  // hooks 

  useEffect(() => {
    const select = rootRef.current;
    if (select) {select.addEventListener('mousedown', handleClick);}
    return () => {
      if (select) {select.removeEventListener('mousedown', handleClick);}
    };
  }, []);

  // render

  return (
    <Dropout {...props} caption={current?.caption || value} >
      {children}
    </Dropout>
  );
};

// -------------------------------------------------------------------------- //
// Layout - to show text line field with autocomplete suggestions.
// -------------------------------------------------------------------------- //

const Controller = props => {
  
  // initial data

  const {className, children, caption, setShownState, matchingItems, value} = props;
  const cssPrefix = `button`; 
  const currentItem = matchingItems?.find(item => item.id == value);
  
  // hooks 
  
  const onClick = (evt) => {
    evt.stopPropagation();
    setShownState(prev => !prev);
  }

  // render

  return (
    <button className={cssPrefix} onClick={onClick}>
      <span className={`${cssPrefix}-caption`}>{currentItem?.caption || value}</span>
      <span className={`${cssPrefix}-arrow`}>
        <i className={'fa-solid fa-chevron-down'}></i>
      </span>
      <span className={`${cssPrefix}-caption`}/>
    </button>
  );
}

// -------------------------------------------------------------------------- //
// Template - to create a gui by metadata.
// -------------------------------------------------------------------------- //

const Template = props => {          
  
  // initial data

  const {common, item} = props;
  const {className, whenValueChange, whenValueModify, ...attributes} = common;
  
  // render

  return (
    <option 
      className={`${className.split(" ")[0]}-option`} 
      onMouseDown={item?.onMouseDown} 
      value={item?.value}
    >
      {item.caption}
    </option>
  );
}

export const Select ={Container, Controller, Template}

// -------------------------------------------------------------------------- //