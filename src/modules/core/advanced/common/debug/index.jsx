
// -------------------------------------------------------------------------- //
//  A feature - to display the element name in the react developer tools.
// -------------------------------------------------------------------------- //

export const withDebug = (name = "Component", ...hocs) => 

  (BaseComponent) => {
    
    return hocs.reduceRight(
      (AccumulatedComponent, hoc) => {
      
        const updateDisplayName = () => {
          const hocName = hoc.name || "AnonymousHOC";
          const baseName = AccumulatedComponent?.displayName || BaseComponent?.displayName || name;
          return `${hocName}(${baseName})`;
        }

        const EnhancedComponent = hoc(AccumulatedComponent);
        EnhancedComponent.displayName = updateDisplayName();
        return EnhancedComponent;

      },
      BaseComponent
    );

  };

// -------------------------------------------------------------------------- //