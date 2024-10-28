import React, { useEffect, useRef, useState } from 'react';
import * as gCFG from "/src/gui/config"
import {Dropout} from '/src/gui/layouts/basics/dropout'
import * as code from "./code.jsx"
// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix: "select"});
gCFG.applyPackage(cfg, gCFG.propPackageSourceData, {filter: code.filter});
gCFG.applyPackage(cfg, gCFG.propPackageTemplate, {Template: code.TemplateDefault});
gCFG.applyPackage(cfg, gCFG.propPackageValueBase, {value: ""});

// -------------------------------------------------------------------------- //
// React Component for selection one option from the source list.
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
  
  // handlers
  const handleClick = (e) => {
    const el = e.target.closest("option");
    if(el) whenValueChange(el.value)
  }

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

Component.propTypes = cfg.propTypes;
export const Select ={cfg, Component }

// -------------------------------------------------------------------------- //