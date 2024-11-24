import React, { useRef, memo, forwardRef } from 'react';

// -------------------------------------------------------------------------- //
//  A feature - to wrap base component into ui block (<div>).
// -------------------------------------------------------------------------- //

export const withDebugCompose = (name = "Component", ...hocs) => 
  (BaseComponent) => {
    
    return hocs.reduceRight((AccumulatedComponent, hoc) => {
      
      const updateDisplayName = () => {
        const hocName = hoc.name || "AnonymousHOC";
        const baseName = AccumulatedComponent?.displayName || BaseComponent?.displayName || name;
        return `${hocName}(${baseName})`;
      }

      const EnhancedComponent = hoc(AccumulatedComponent);
      EnhancedComponent.displayName = updateDisplayName();
      return EnhancedComponent;

    }, BaseComponent);

  };

// -------------------------------------------------------------------------- //