import React, { useCallback, useEffect, useState } from 'react';

// -------------------------------------------------------------------------- //
// A feature - to reveals child components.
// -------------------------------------------------------------------------- //

export const withReveals = (WrappedComponent) => {

  return (props) => {

    // initial data

    const { 
      shown 
    } = props;

    // input handling

    const closePopup = useCallback(() => setShownState(false), []);

    const handleMouseDown = useCallback((evt) => closePopup(), [closePopup]);

    const handleKeyDown = useCallback(
      (evt) => {if (evt.key === 'Enter') closePopup();}, 
      [closePopup]
    );

    // hooks
    
    const [shownState, setShownState] = useState(shown);

    useEffect(() => {setShownState(shown);}, [shown]);
    
    useEffect(() => {
      if (shownState) {
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('keydown', handleKeyDown);
      }
      return () => {
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [shownState, handleMouseDown, handleKeyDown]);

    // render
    
    const updateProps = { shownState, setShownState, ...props };
    return <WrappedComponent {...updateProps} />;
  };
  
};


// -------------------------------------------------------------------------- //