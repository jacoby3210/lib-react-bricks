import React, { useCallback, useEffect, useRef, useState } from 'react';

// -------------------------------------------------------------------------- //
// Widget - to switch of displayed content in the view by special id.
// -------------------------------------------------------------------------- //

const Template = props =>{

	// initial data

  const {common, item, index} = props;
  const {className} = common;

  // hooks

  useEffect(() => {}, [common.value]);

	// render

  return <button 
    className= {`${className.split(" ")[0]}-button`} 
    onClick= {()=> common.whenValueChange(index * common.step)}
    {...item}
  >
    {item?.caption}
  </button>;
}

export const Browser = {Template}

// -------------------------------------------------------------------------- //