import React, { useCallback, useEffect, useState } from 'react';
// ------------------------------------------------------------------------- //
// HOC to display child components outside of the main document flow. 
// ------------------------------------------------------------------------- //

export const withPopup = (WrappedComponent) => {

  return props => {
  
    // initial data
    const {shown} = props;

    // hooks
    const [shownState, setShownState] = useState(shown);

    // inputs
    const handleMouseDown = useCallback((evt) => setShownState(false), []);

    // hooks
    useEffect(() => {
      if (shownState) {
        document.addEventListener('mousedown', handleMouseDown);
      } else {
        document.removeEventListener('mousedown', handleMouseDown);
      }
      return () => {
        document.removeEventListener('mousedown', handleMouseDown);
      };
    }, [shownState, handleMouseDown]);

    // render
    const wrapProps = {shownState, setShownState, ...props}
    return (<WrappedComponent {...wrapProps} />);
  }
}
// ------------------------------------------------------------------------- //