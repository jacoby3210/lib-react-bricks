import React, { useEffect, useRef, useState } from 'react';
import * as gCFG from "@lib-react-bricks/src/gui/config"

// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix: "switcher"});
gCFG.applyPackage(cfg, gCFG.propPackageSourceData, {});
gCFG.applyPackage(cfg, gCFG.propPackageValueBase, {value: 0});

// -------------------------------------------------------------------------- //
// Layout - to select one option from the source list  (alt mode \ enum).
// -------------------------------------------------------------------------- //

export const Component = props => {

  // initial data

  const {
    rounded,
    src, 
    value, whenValueChange, whenValueModify,
  } = props;

  // hooks
  
  // input handling

  const handlePrevClick = () => {
    if(value !== 0) whenValueModify(-1);
    else if(rounded) whenValueChange(src.length - 1);
  };

  const handleNextClick = () => {
    console.log(props)
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

Component.propTypes = cfg.types;
export const Switcher = {cfg, Component}

// -------------------------------------------------------------------------- //