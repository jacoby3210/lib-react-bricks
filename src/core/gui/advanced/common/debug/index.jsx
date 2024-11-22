import React, { useRef, memo, forwardRef } from 'react';

// -------------------------------------------------------------------------- //
//  A feature - to wrap base component into ui block (<div>).
// -------------------------------------------------------------------------- //

export const withDebug = (name,) => (BaseComponent) => {
  const EnhancedComponent = BaseComponent;
  EnhancedComponent.displayName = `${BaseComponent.displayName || BaseComponent.name } Component (${name})`;
  return EnhancedComponent;
};

export const withDebugCompose = (name, ...hocs) => (BaseComponent) => {
  return hocs.reduceRight((AccumulatedComponent, hoc) => {
    // console.log(name, hocs, hoc,  BaseComponent) 
    const EnhancedComponent = hoc(AccumulatedComponent);
    const hocName = hoc.name || BaseComponent?.displayName || name || 'HOC';
    // const name = BaseComponent?.name 
    //   ? 

    EnhancedComponent.displayName = `${hocName}(${hocName})`;
    return EnhancedComponent;
  }, BaseComponent);
};


// -------------------------------------------------------------------------- //