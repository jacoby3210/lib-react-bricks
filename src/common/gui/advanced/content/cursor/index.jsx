import React, { useCallback, useState } from 'react';

// -------------------------------------------------------------------------- //
// A feature - to navigate through the direct children of an element.
// -------------------------------------------------------------------------- //

export const withCursor = (WrappedComponent) => {
  
  return (props) => {
    
    // initial data
    
    const {
      matchingItems, 
      whenValueChange
    } = props;

    // hooks

    const [cursorIndexState, setCursorIndexState] = useState(0);

    // input handling
    
    const handleKeyDown = useCallback(
      (evt) => {
        if (evt.key === 'ArrowDown') 
          setCursorIndexState((prev) => Math.min(prev + 1, matchingItems.length - 1));
        else if (evt.key === 'ArrowUp') 
          setCursorIndexState((prev) => Math.max(prev - 1, 0)); 
        else if (evt.key === 'Enter') 
          whenValueChange(matchingItems[cursorIndexState]?.caption);
      },
      [matchingItems, whenValueChange, cursorIndexState,]
    );

    const handleMouseDown = useCallback(
      (evt) => whenValueChange(evt.target.value),
      [whenValueChange]
    );

    // render

    const updateProps = { 
      cursorIndexState, setCursorIndexState,
      onKeyDown: handleKeyDown, 
      onMouseDown: handleMouseDown,
      ...props,
    };

    return <WrappedComponent {...updateProps} />;
  };
};

// -------------------------------------------------------------------------- //