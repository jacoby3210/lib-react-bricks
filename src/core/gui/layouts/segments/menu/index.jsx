import { useCallback, useEffect, useRef, useState } from 'react';

// -------------------------------------------------------------------------- //
// Widget - to display desktop application menu. 
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// Layout - to show text line field with autocomplete suggestions.
// -------------------------------------------------------------------------- //

const Controller = props => {
  
  // initial data

  const {caption, setShownState, value} = props;
  const cssPrefix = `button`; 
  
  // hooks 
  
  const onClick = (evt) => {
    evt.stopPropagation();
    setShownState(prev => !prev);
  }

  // render

  return (
    <button className={cssPrefix} onClick={onClick}>
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
  
  // hooks 

  const [shownState, setShownState] = useState(value);
  useEffect(() => {setShownState(value.includes(index))}, [value]);

  // render
  
  return (
    item.datatype == "menu"
    ? 
      <item.Render {...common} src={item.props.src} caption={item.caption} shown={shownState}/>
    : 
      <item.Render label={item.caption}/>
	);
}

export const Menu = {Controller, Template}

// -------------------------------------------------------------------------- //