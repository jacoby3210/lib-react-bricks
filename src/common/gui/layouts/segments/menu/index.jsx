import React, { useCallback, useEffect, useRef, useState } from 'react';
import {Button, Dropout} from "@lib-react-bricks/src/common/gui/components"

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
    caption: item.caption, 
    shownState, 
    setShownState, 
    ...common
  }
  if(item.datatype == "menu") console.log(3, item.props.src)
  
  return (
    item.datatype == "menu"
    ? <Dropout {...dropoutProps}>
      <item.Render {...common} src={item.props.src}/>
    </Dropout>
    : <item.Render label={item.caption}/>
	);
}

export const Menu = {Template}

// -------------------------------------------------------------------------- //