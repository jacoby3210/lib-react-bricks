import { useCallback, useEffect, useState } from 'react';

// -------------------------------------------------------------------------- //
// A feature - to reveals child components.
// WrappedComponent hides by default when clicked inside.
// To prevent this behaviour, the click event inside should not bubble.
// -------------------------------------------------------------------------- //

export const withReveals = (WrappedComponent) => (props) => {

  // initial data

  const { 
    children,
    shown = false,
    Controller,
  } = props;
  
  // input handling

  const closePopup = useCallback(() => setShownState(false), []);

  const handleClick = useCallback(
    (evt) => closePopup(), 
    [closePopup]
  );

  const handleKeyDown = useCallback(
    (evt) => {if (evt.key === 'Enter') closePopup();}, 
    [closePopup]
  );

  // hooks
  
  const [shownState, setShownState] = useState(shown);

  useEffect(() => {setShownState(shown);}, [shown]);
  
  useEffect(
    () => {
      if (shownState) {
        document.addEventListener('click', handleClick);
        document.addEventListener('keydown', handleKeyDown);
      }
      return () => {
        document.removeEventListener('click', handleClick);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, 
    [shownState, handleClick, handleKeyDown]
  );

  // render
  
  const updateProps = { shownState, setShownState, ...props };
  return (
    shownState 
      ? <>
          <Controller {...updateProps}/>
          <WrappedComponent {...props}/>
          {children}
        </>
      : <Controller {...updateProps}/>
  );
};

// -------------------------------------------------------------------------- //