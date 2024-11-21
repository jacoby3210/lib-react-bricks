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
  
  const currentIndex = useRef(0)
  const displayText = src[currentIndex.current]?.caption || "Not Found"; 
  
  // input handling

  const handlePrevClick = useCallback(
    () => {
      if(modular) currentIndex.current = (currentIndex.current - 1) % max;
      else currentIndex.current = Math.max(currentIndex.current - 1, 0);
      whenValueChange(src[currentIndex.current].id);
    }, 
    [currentIndex, value, whenValueChange, whenValueModify]
  );

  const handleNextClick = useCallback(
    () => {
      if(modular) currentIndex.current = (currentIndex.current + 1) % max;
      else currentIndex.current = Math.min(currentIndex.current + 1, max);
      whenValueChange(src[currentIndex.current].id);
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
      <span>{displayText}</span>
      <button {... btnNextProps}>→</button>
    </>
  );
};

// -------------------------------------------------------------------------- //