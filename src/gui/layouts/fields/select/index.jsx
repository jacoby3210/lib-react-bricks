import React, {useEffect, useRef, useState } from 'react';
import * as gCFG from "/src/gui/config"
import {Dropout} from '/src/gui/layouts/basics/dropout'

// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix: "select"});
gCFG.applyPackage(cfg, gCFG.propPackageSourceData, {});
gCFG.applyPackage(cfg, gCFG.propPackageValueBase, {value: ""});

// -------------------------------------------------------------------------- //
// Layout - to select one option from the source list.
// -------------------------------------------------------------------------- //

const Component = props => {

  // initial data

  const {
    children, 
    rootRef, 
    src, 
    value, whenValueChange, whenValueModify
  } = props;

  const caption = src?.find(item => item.value == value).caption;
  
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
    <Dropout.Component {...props} caption={caption} >
      {children}
    </Dropout.Component>
  );
};

// -------------------------------------------------------------------------- //
// Template for forming a gui by metadata.
// -------------------------------------------------------------------------- //

const Template = receivedProps => {          
  
  // initial data

  const {common, item} = receivedProps;
  const {className, whenValueChange, whenValueModify, ...attributes} = common;
  
  // render

  return (
    <option 
      {...attributes}
      className={`${className.split(" ")[0]}-option`} 
      onMouseDown={item?.onMouseDown} 
      value={item?.value}
    >
      {item.caption}
    </option>
  );
}

Component.propTypes = cfg.types;
export const Select ={cfg, Component, Template }

// -------------------------------------------------------------------------- //