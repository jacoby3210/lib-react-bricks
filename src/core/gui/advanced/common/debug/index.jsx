import React, { useRef, memo, forwardRef } from 'react';

// -------------------------------------------------------------------------- //
//  A feature - to wrap base component into ui block (<div>).
// -------------------------------------------------------------------------- //

export const withDebug = (name,) => (BaseComponent) => {
  const EnhancedComponent = BaseComponent;
  EnhancedComponent.displayName = `${BaseComponent.displayName || BaseComponent.name } Component (${name})`;
  return EnhancedComponent;
};

export const withDebugCompose = (...hocs) => (BaseComponent) => {
  return hocs.reduceRight((AccumulatedComponent, hoc) => {
    const EnhancedComponent = hoc(AccumulatedComponent);
    const hocName = hoc.name || BaseComponent?.name || BaseComponent?.displayName || 'HOC';
    EnhancedComponent.displayName = `${hocName}(${'Component'})`;
    return EnhancedComponent;
  }, BaseComponent);
};


// -------------------------------------------------------------------------- //