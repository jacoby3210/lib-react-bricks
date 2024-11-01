import React, { useRef, useEffect } from 'react';
import * as gCFG from "/src/gui/config"

// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix: "swing"});
gCFG.applyPackage(cfg, gCFG.propPackageOrientationBase, {axis:false});
gCFG.applyPackage(cfg, gCFG.propPackageValueNumber, {value: 0});

// -------------------------------------------------------------------------- //
// React Component to control the increase/decrease of the value.
// -------------------------------------------------------------------------- //

const Component = (props) => {

  // initial data

  const {
    className,
    valueRangeMax, valueRangeMin, valueStep,
    whenValueChange, whenValueModify,
  } = props;
  const isButtonStart = (btn) => btn.classList.contains(`${className}-start`);

  // hooks

  const timeoutRef = useRef(null);
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, []);

  // input handling

  const onDoubleClick = (evt) => {
    const next = isButtonStart(evt.target) ? valueRangeMin : valueRangeMax;
    whenValueChange(next);
  };

  const onMouseDownSlice = (offset) => whenValueModify(offset);
  
  const onMouseDown = (evt) => {
    if (evt.detail !== 1) return;
    const normStep = valueStep * (isButtonStart(evt.target) ? -1 : 1);
    const fn = () => onMouseDownSlice(normStep);
    fn();
    timeoutRef.current = setInterval(fn, 100);
  };  

  const onMouseUp = () => {
    if (timeoutRef.current) clearInterval(timeoutRef.current);
    timeoutRef.current = null;
  };

  // render

  const buttonProps = { onDoubleClick, onMouseDown, onMouseUp };
  const startProps = { className: `${className}-start`, ...buttonProps };
  const endProps = { className: `${className}-end`, ...buttonProps };

  return (
    <>
      <button {...startProps} />
      <button {...endProps} />
    </>
  );
};

Component.propTypes = cfg.types;
export const Swing = { cfg, Component };

// -------------------------------------------------------------------------- //