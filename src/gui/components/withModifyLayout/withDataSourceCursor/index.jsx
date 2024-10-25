import React, { useCallback, useState } from 'react';
// ------------------------------------------------------------------------- //
// HOC to map multiple child nodes by filtered data source and JSX template. //
// ------------------------------------------------------------------------- //

export const withDataSourceCursor = (WrappedComponent) => {
  return (props) => {
    // initial data
    const { src = [], whenValueChange, ...attributes } = props;
    const [cursorIndexState, setCursorIndexState] = useState(0);

    // handle input
    const handleValueChange = useCallback((next) => whenValueChange(next), [whenValueChange]);
    const handleChange = useCallback((evt) => handleValueChange(evt.target.value), [handleValueChange]);
    const handleKeyDown = useCallback(
      (evt) => {
        if (evt.key === 'ArrowDown') {
          setCursorIndexState((prev) => Math.min(prev + 1, src.length - 1));
        } else if (evt.key === 'ArrowUp') {
          setCursorIndexState((prev) => Math.max(prev - 1, 0));
        } else if (evt.key === 'Enter' && cursorIndexState >= 0) {
          handleValueChange(src[cursorIndexState]?.caption);
        }
      },
      [cursorIndexState, handleValueChange, src]
    );

    const handleMouseDown = useCallback(
      (evt) => handleValueChange(evt.target.value),
      [handleValueChange]
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

// ------------------------------------------------------------------------- //