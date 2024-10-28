import React, { useCallback } from 'react';
// -------------------------------------------------------------------------- //
// HOC to handle a change in the value of a component (text type).            //
// -------------------------------------------------------------------------- //

export const withValueHandleText = (WrappedComponent) => {
  return (receivedProps) => {

    // initial data
    const {
      valueForbiddenChars: forbidden, 
      valueLengthMax: max,
      valueLengthMin: min,
      value,
      whenValueChange,
      whenValueModify,
    } = receivedProps;

    // supporting methods
    const containsForbiddenChars = (next) => {
      const forbiddenPattern = new RegExp(`[${forbidden.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}]`);
      return forbiddenPattern.test(next);
    }

    // input handling
    const handleValueChange = useCallback(
      (next) => {
        if(!containsForbiddenChars(next)) 
          whenValueChange(next)
      },
      [min, max, whenValueChange]
    );

    const handleValueModify = useCallback(
      (increment) =>{ whenValueModify( increment)},
      [whenValueModify, value]
    );

	// render 
    const modifiedProps = {
      ...receivedProps,
      whenValueChange: handleValueChange,
      whenValueModify: handleValueModify,
    };

    return <WrappedComponent {...modifiedProps} />;
  };
};

// -------------------------------------------------------------------------- //