import React, { useCallback, useEffect, useRef, useState } from 'react';
import {Button, Dropout} from "@lib-react-bricks/src/common/gui/layouts"

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

  const [shownState, setShownState] = useState(value);
  useEffect(() => {setShownState(value.includes(index))}, [value]);

  // render
  
  const dropoutProps = {
    label: item.caption, 
    shownState, 
    setShownState, 
    ...common
  }

  return (
    item.type 
    ? <Button>{item.caption}</Button>
    : <Dropout {...dropoutProps} {...attributes}>
      {item.caption}
    </Dropout>
	);
}

export const Menu = {Template}

// -------------------------------------------------------------------------- //