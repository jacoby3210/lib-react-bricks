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
    // Применение текущего HOC
    const EnhancedComponent = hoc(AccumulatedComponent);

    // Определение имени HOC и базового компонента
    const hocName = hoc.name || "AnonymousHOC";
    const baseName = AccumulatedComponent?.displayName || BaseComponent?.displayName || name || "Component";

    // Установка displayName для отладки
    EnhancedComponent.displayName = `${hocName}(${baseName})`;

    return EnhancedComponent;
  }, BaseComponent);
};

// -------------------------------------------------------------------------- //