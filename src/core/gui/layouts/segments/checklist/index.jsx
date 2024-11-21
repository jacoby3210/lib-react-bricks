import React, { useCallback, useEffect, useRef, useState } from 'react';
import {CheckBox} from "@lib-react-bricks/src/core/gui/components"

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
      <CheckBox id={item.label} {...updateProps} />
			<label htmlFor={item.label}>{item?.text}</label>
		</li>
	);
}

export const CheckList = {Template}

// -------------------------------------------------------------------------- //