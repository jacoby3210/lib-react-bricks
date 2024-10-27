import React, { useEffect, useRef, useState } from 'react';
import * as cfg from "./config"
// ------------------------------------------------------------------------- //
// React Component for selection one option from the source list (alt mode).
// ------------------------------------------------------------------------- //

export const Component = props => {

  // initial data
  const {
    id,
    rootRef,
    rounded,
    src,
    value, whenValueChange, whenValueModify,
  } = props;

  // hooks

  // input from user
  const handlePrevClick = () => {
    if(value !== 0) 
      whenValueModify(-1);
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
      <span>{src[value].caption}</span>
      <button onClick={handleNextClick}>→</button>
    </>
  );
};

Component.propTypes = cfg.propTypes;
export const Switcher = {cfg, Component}

// ------------------------------------------------------------------------- //