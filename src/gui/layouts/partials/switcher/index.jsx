import React, { useEffect, useRef, useState } from 'react';
import * as code from "./code"
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
    value,
    whenValueChange,
    whenValueModify,
    ...attributes
  } = props;

  // hooks
  const srcRef = useRef(src);

  // input from user
  const handlePrevClick = () => {
    if(value !== 0) whenValueModify(-1);
    else if(rounded) whenValueChange(srcRef.current.length - 1);
  };

  const handleNextClick = () => {
    if(value !== srcRef.current.length - 1) whenValueModify(1);
    else if(rounded) whenValueChange(0);
  };

  // render
  return (
    <>
      <button onClick={handlePrevClick}>←</button>
      <span>{srcRef.current[value].caption}</span>
      <button onClick={handleNextClick}>→</button>
    </>
  );
};

Component.propTypes = cfg.propTypes;
export const Switcher = {cfg, Component}

// ------------------------------------------------------------------------- //