import React, { useCallback, useEffect, useState } from 'react';

// -------------------------------------------------------------------------- //
// A feature - to navigate through the direct children of an element.
// -------------------------------------------------------------------------- //

export const withCursor = (WrappedComponent) => (props) => {
    
  // initial data
  
  const {
    matchingItems, 
    whenValueChange
  } = props;

  // hooks

  const [cursorIndexState, setCursorIndexState] = useState(0);
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    if (selectedValue !== null) {
      whenValueChange(selectedValue);
    }
  }, [selectedValue, whenValueChange]);

  // input handling
  
  const handleKeyDown = useCallback(
    (evt) => {
      setCursorIndexState((prev) => {
        if (evt.key === 'ArrowDown')  return Math.min(prev + 1, matchingItems.length - 1);
        if (evt.key === 'ArrowUp')    return Math.max(prev - 1, 0);
        if (evt.key === 'Enter')      setSelectedValue(matchingItems[prev]?.id);
        return prev;
      });
      evt.preventDefault();
    },
    [matchingItems]
  );

  const handleClick = useCallback(
    (evt) => whenValueChange(evt.target.value),
    [whenValueChange]
  );

  // render

  const updateProps = { 
    cursorIndexState, setCursorIndexState,
    onKeyDown: handleKeyDown, 
    onClick: handleClick,
    ...props,
  };

  return <WrappedComponent {...updateProps} />;
  
};

// -------------------------------------------------------------------------- //