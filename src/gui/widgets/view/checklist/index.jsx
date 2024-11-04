import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as gCFG  from "/src/gui/config"
import {CheckBox} from "/src/gui/layouts"
import { Advisor } from '/src/gui/layouts';
// import { TemplateCloudSelectTag } from './helpers';
// import { TemplateViewItemDefault } from '../../basics/view/helpers';

// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix: "checklist"});
gCFG.applyPackage(cfg, gCFG.propPackageSourceData, {});
gCFG.applyPackage(cfg, gCFG.propPackageValueBase, {value: []});

// -------------------------------------------------------------------------- //
// Widget - to display the add/remove tags interface. 
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
		<li {...attributes}>
      <CheckBox.Component {...updateProps} />
			<span>{item?.text}</span>
			<button>X</button>
		</li>
	);
}

Component.propTypes = cfg.types;
export const CheckList = {cfg, Template}

// -------------------------------------------------------------------------- //