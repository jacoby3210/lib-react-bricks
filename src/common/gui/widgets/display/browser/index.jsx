import React, { useCallback, useEffect, useRef, useState } from 'react';

// -------------------------------------------------------------------------- //
// Widget - to switch of displayed content in the view by special id.
// -------------------------------------------------------------------------- //

const Template = props =>{

	// initial data

  const {common, item, index} = props;

  // hooks

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

export const Browser = {Template}

// -------------------------------------------------------------------------- //