import React, { useCallback, useState } from 'react';
// -------------------------------------------------------------------------- //
// A feature - to navigate through the direct children of an element.
// -------------------------------------------------------------------------- //

export const withCursor = (WrappedComponent) => {
  
  return (props) => {
    
    // initial data
    
    const {matchingItems, whenValueChange,} = props;

    // hooks

    const [cursorIndexState, setCursorIndexState] = useState(0);

    // input handling
    
    const handleChange = useCallback(
      (evt) => whenValueChange(evt.target.value), 
      [whenValueChange]
    );

    const handleKeyDown = useCallback(
      (evt) => {
        if (evt.key === 'ArrowDown') {
          setCursorIndexState((prev) => Math.min(prev + 1, matchingItem.length - 1));
        } else if (evt.key === 'ArrowUp') {
          setCursorIndexState((prev) => Math.max(prev - 1, 0));
        } else if (evt.key === 'Enter' && cursorIndexState >= 0) {
          whenValueChange(matchingItems[cursorIndexState]?.caption);
        }
      },
      [cursorIndexState, whenValueChange, matchingItems]
    );

    const handleMouseDown = useCallback(
      (evt) => whenValueChange(evt.target.value),
      [whenValueChange]
    );

    // render

    const wrapProps = {
      onKeyDown: handleKeyDown,
      onMouseDown: handleMouseDown,
      cursorIndexState,
      setCursorIndexState,
      ...props,
    };

    return <WrappedComponent {...wrapProps} />;
  };
};

// -------------------------------------------------------------------------- //