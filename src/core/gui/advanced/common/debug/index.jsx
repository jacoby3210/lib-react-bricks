import React, { useRef, memo, forwardRef } from 'react';

// -------------------------------------------------------------------------- //
//  A feature - to wrap base component into ui block (<div>).
// -------------------------------------------------------------------------- //

export const withDebug = (name) => (BaseComponent) => {
  const EnhancedComponent = BaseComponent;
  EnhancedComponent.displayName = `${BaseComponent.displayName || BaseComponent.name } Component (${name})`;
  console.log(BaseComponent)
  return EnhancedComponent;
};

// -------------------------------------------------------------------------- //