import React, { useCallback, useEffect, useRef, useState } from 'react';

// -------------------------------------------------------------------------- //
// Layout - to select one option from the source list  (alt mode \ enum).
// -------------------------------------------------------------------------- //

export const Switcher = props => {

  // initial data

  const {
    className,
    matchingItems,
    max,
    min,
    modular,
    src,
    step,
    value, 
    whenValueChange, 
    whenValueModify,
  } = props;

  // hooks
  
  // input handling

  const handlePrevClick = useCallback(
    () => {
      if(value !== 0) whenValueModify(-1);
      else if(modular) whenValueChange(src.length - 1);
    }, 
    [value, whenValueChange, whenValueModify]
  );

  const handleNextClick = useCallback(
    () => {
      if(value !== src.length - 1) whenValueModify(1);
      else if(modular) whenValueChange(0);
    },
    [value, whenValueChange, whenValueModify]
  )

  // render

  const btnPrevProps = {
		className: `${className.split(" ")[0]}-prev`,
		onClick: handlePrevClick,
		disabled: value === min && !modular,
	}
  
  const btnNextProps = {
		className: `${className.split(" ")[0]}-next`,
		onClick: handleNextClick,
		disabled: value === max - 1 && !modular,
	}

  return (
    <>
      <button {... btnPrevProps}>←</button>
      <span>{src[value]?.caption || "Not Found"}</span>
      <button {... btnNextProps}>→</button>
    </>
  );
};

// -------------------------------------------------------------------------- //