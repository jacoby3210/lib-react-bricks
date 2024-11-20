import React, { useCallback, useEffect, useRef, useState } from 'react';

// -------------------------------------------------------------------------- //
// Layout - to select one option from the source list  (alt mode \ enum).
// -------------------------------------------------------------------------- //

export const Switcher = props => {

  // initial data

  const {
    className,
    max,
    min,
    modular,
    src, 
    value, 
    whenValueChange, 
    whenValueModify,
  } = props;

  // hooks
  
  // input handling

  const handlePrevClick = useCallback(
    () => {
      console.log(value)
      if(value !== 0) whenValueModify(-1);
      else if(modular) whenValueChange(src.length - 1);
    }, 
    []
  );

  const handleNextClick = useCallback(
    () => {
      console.log(value)
      if(value !== src.length - 1) whenValueModify(1);
      else if(modular) whenValueChange(0);
    },
    []
  )

  // render

  const btnPrevProps = {
		className: `${className.split(" ")[0]}-first`,
		onClick: () => { whenValueModify(- step); },
		disabled: value === min && !modular,
	}
  const btnNextProps = {
		className: `${className.split(" ")[0]}-first`,
		onClick: () => { whenValueModify(- step); },
		disabled: value === max && !modular,
	}

  return (
    <>
      <button onClick={handlePrevClick}>←</button>
      <span>{src[value]?.caption || "Not Found"}</span>
      <button onClick={handleNextClick}>→</button>
    </>
  );
};

// -------------------------------------------------------------------------- //