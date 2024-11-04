import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as gCFG  from "/src/gui/config"

// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix: "checklist"});
gCFG.applyPackage(cfg, gCFG.propPackageSourceData, {});
gCFG.applyPackage(cfg, gCFG.propPackageValueBase, {value: []});

// -------------------------------------------------------------------------- //
// Widget - to display desktop application menu. 
// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //
// Template - to create a gui by metadata.
// -------------------------------------------------------------------------- //

const Template = props => {
  
  // initial data
	
  const {common, item, ...attributes} = props;
  const {value, whenValueChange} = common;
  
  // input handling
  
  const handleToggle = useCallback(
    (isNotCheck) => whenValueChange(
        isNotCheck ? [...value, item.id] : value.filter(i => i !== item.id)
    ),
    [value, whenValueChange]
  );
  
  // render

  const updateProps = {
    value: value.includes(item.id), 
    whenValueChange: handleToggle
  }

  return (
    item.type 
    ? <button>{item.caption}</button>
    : <li {...attributes}>{item.caption}</li>
	);
}

export const Menu = {cfg, Template}

// -------------------------------------------------------------------------- //