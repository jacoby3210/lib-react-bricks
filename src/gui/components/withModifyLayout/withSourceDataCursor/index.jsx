import React, { useCallback, useState } from 'react';
// -------------------------------------------------------------------------- //
// HOC to map multiple child nodes by filtered data source and JSX template. //
// -------------------------------------------------------------------------- //

export const withSourceDataCursor = (WrappedComponent) => {
  return (props) => {
    
    // initial data
    
    const {
      src = [], 
      matchingItems, 
      nonMatchingItems, 
      whenValueChange, 
      ...attributes
    } = props;
    const [cursorIndexState, setCursorIndexState] = useState(0);

    // input handling
    
    const handleChange = useCallback(
      (evt) => whenValueChange(evt.target.value), 
      [whenValueChange]
    );

    const handleKeyDown = useCallback(
      (evt) => {
        if (evt.key === 'ArrowDown') {
          setCursorIndexState((prev) => Math.min(prev + 1, src.length - 1));
        } else if (evt.key === 'ArrowUp') {
          setCursorIndexState((prev) => Math.max(prev - 1, 0));
        } else if (evt.key === 'Enter' && cursorIndexState >= 0) {
          whenValueChange(src[cursorIndexState]?.caption);
        }
      },
      [cursorIndexState, whenValueChange, src]
    );

    const handleMouseDown = useCallback(
      (evt) => whenValueChange(evt.target.value),
      [whenValueChange]
    );

    // render
    const sendProps = {
      onChange: handleChange,
      onKeyDown: handleKeyDown,
      onMouseDown: handleMouseDown,
      cursorIndexState,
      setCursorIndexState,
      ...props,
    };

    return <WrappedComponent {...sendProps} />;
  };
};

// -------------------------------------------------------------------------- //