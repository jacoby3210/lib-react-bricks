import React, { useEffect, useRef, useState } from 'react';
import * as gCFG from "/src/gui/config"
import { Range } from '/src/gui/layouts/controls/range';
import { Swing } from '/src/gui/layouts/controls/swing';

// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix: "range"});
gCFG.applyPackage(cfg, Range.cfg.values, {value: 0});
gCFG.applyPackage(cfg, Swing.cfg.values, {value: 0});

// -------------------------------------------------------------------------- //
// Layout - unites the separate Range and Swing layouts into a Slider.
// -------------------------------------------------------------------------- //

const Component = props => {

  // render 
  return (
    <>
      <Range.Component {...Range.cfg.values} {...props} />
      <Swing.Component {...Swing.cfg.values} {...props}/>
    </>
  );
};

Component.propTypes = cfg.types;
export const Slider = {cfg, Component};

// -------------------------------------------------------------------------- //