import React, { useCallback, useEffect, useState } from 'react';

// -------------------------------------------------------------------------- //
// A feature to reveals child components.                                     // 
// -------------------------------------------------------------------------- //

export const withReveals = (WrappedComponent) => {
  return (props) => {

    // initial data

    const { reveals } = props;

    // input handling

    const closePopup = useCallback(() => setRevealsState(false), []);
    const handleMouseDown = useCallback((evt) => closePopup(), [closePopup]);
    const handleKeyDown = useCallback(
      (evt) => {if (evt.key === 'Enter') closePopup();}, 
      [closePopup]
    );

    // hooks
    
    const [revealsState, setRevealsState] = useState(reveals);
    useEffect(() => {setRevealsState(reveals);}, [reveals]);

    useEffect(() => {
      if (revealsState) {
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('keydown', handleKeyDown);
      }
      return () => {
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [revealsState, handleMouseDown, handleKeyDown]);

    // render
    const wrapProps = { revealsState, setRevealsState, ...props };
    return <WrappedComponent {...wrapProps} />;
  };
};


// -------------------------------------------------------------------------- //