import React, { useEffect, useRef, useState } from 'react';
import * as gCFG from "/src/gui/config"
import { Range } from '/src/gui/layouts/controls/range';
import { Swing } from '/src/gui/layouts/controls/swing';
// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix: "range"});
gCFG.applyPackage(cfg, gCFG.propPackageOrientationBase, {axis:false});
gCFG.applyPackage(cfg, gCFG.propPackageValueNumber, {value: 0});

// -------------------------------------------------------------------------- //
// React Component represents Range with control buttons.
// -------------------------------------------------------------------------- //

const Component = props => {

  // initial data
  const {rootRef, ...otherProps} = props;
  
  // render 
  return (
    <>
      <Range.Component {...Range.propValues} {...otherProps} />
      <Swing.Component {...Swing.propValues} {...otherProps}/>
    </>
  );
};

Component.propTypes = cfg.propTypes;
export const Slider = {cfg, Component};

// -------------------------------------------------------------------------- //