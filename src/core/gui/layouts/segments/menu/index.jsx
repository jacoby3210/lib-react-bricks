import { useCallback, useEffect, useRef, useState } from 'react';
import { useReveals } from '../../../advanced/markup/reveals';

// -------------------------------------------------------------------------- //
// Widget - to display desktop application menu. 
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// Layout - to show text line field with autocomplete suggestions.
// -------------------------------------------------------------------------- //

const Controller = props => {
  
  // initial data

  const {caption, value} = props;
  const cssPrefix = `button`; 
	const reveals = useReveals();
  
  // hooks 

  const handleClick = useCallback(
    (evt) => {
      evt.stopPropagation();
      reveals.dispatch({type: "TOGGLE"}); 
    }, [reveals]
  )

  // render

  return (
    <button className={cssPrefix} onClick={handleClick}>
      <span className={`${cssPrefix}-caption`}>{caption || value}</span>
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
	
  const {common, item, index, ...attributes} = props;
  const {value, whenValueChange} = common;
	const reveals = useReveals();
  
  // hooks 

  useEffect(
    () => {
      if(value.includes(index) == reveals.state.shown)
        reveals.dispatch({type: value.includes(index) ? "SHOW" : "HIDE"})
      }, 
    [reveals]
  );

  // render
  
  return (
    item.datatype == "menu"
    ? 
      <item.Render {...common} src={item.props.src} caption={item.caption} shown={value.includes(index)}/>
    : 
      <item.Render label={item.caption}/>
	);
}

export const Menu = {Controller, Template}

// -------------------------------------------------------------------------- //