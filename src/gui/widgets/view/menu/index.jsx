import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as gCFG  from "@lib-react-bricks/src/gui/config"
import {Dropout} from "@lib-react-bricks/src/gui/layouts"

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
	
  const {common, item, index, ...attributes} = props;
  const {value, whenValueChange} = common;
  
  // hooks 

  const [revealsState, setRevealsState] = useState(value);
  useEffect(() => {setRevealsState(value.includes(index))}, [value]);

  // input handling
  
  const handleToggle = useCallback(
    (isNotCheck) => whenValueChange(
        isNotCheck ? [...value, item.id] : value.filter(i => i !== item.id)
    ),
    [value, whenValueChange]
  );
  
  // render
  const dropoutProps = {revealsState, setRevealsState}
  const updateProps = {
    value: value.includes(item.id), 
    whenValueChange: handleToggle
  }

  return (
    item.type 
    ? <button>{item.caption}</button>
    : <Dropout.Component {...dropoutProps} {...attributes}>
      {item.caption}
    </Dropout.Component>
	);
}

export const Menu = {cfg, Template}

// -------------------------------------------------------------------------- //