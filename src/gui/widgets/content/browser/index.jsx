import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as gCFG  from "/src/gui/config"

// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix: "browser"});
gCFG.applyPackage(cfg, gCFG.propPackageSourceData, {});
gCFG.applyPackage(cfg, gCFG.propPackageValueNumber, {value: 0});

// -------------------------------------------------------------------------- //
// Widget - to switch of displayed content in the view by special id.
// -------------------------------------------------------------------------- //

export const Template = props =>{

	// initial data

  const {common, item, index} = props;
  
  useEffect(() => {}, [common.value]);

	// render

  return <button 
    className= {`rc-browser-button`} 
    onClick= {()=> common.whenValueChange(index * common.valueStep)}
    {...item}
  >
    {item?.caption}
  </button>;
}


Template.propTypes = cfg.types;
export const Browser = {cfg, Template}

// -------------------------------------------------------------------------- //