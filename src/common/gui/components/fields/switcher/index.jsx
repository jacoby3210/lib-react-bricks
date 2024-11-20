import React, { useEffect, useRef, useState } from 'react';

// -------------------------------------------------------------------------- //
// Layout - to select one option from the source list  (alt mode \ enum).
// -------------------------------------------------------------------------- //

export const Switcher = props => {

  // initial data

  const {
    rounded,
    src, 
    value, 
    whenValueChange, 
    whenValueModify,
  } = props;

  // hooks
  
  // input handling

  const handlePrevClick = () => {
    if(value !== 0) whenValueModify(-1);
    else if(rounded) whenValueChange(src.length - 1);
  };

  const handleNextClick = () => {
    if(value !== src.length - 1) whenValueModify(1);
    else if(rounded) whenValueChange(0);
  };

  // render

  return (
    <>
      <button onClick={handlePrevClick}>←</button>
      <span>{src[value]?.caption || "Not Found"}</span>
      <button onClick={handleNextClick}>→</button>
    </>
  );
};

// -------------------------------------------------------------------------- //