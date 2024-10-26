import React, { useCallback } from 'react';
// ------------------------------------------------------------------------- //
// HOC to handle a change in the value of a component.                       //
// ------------------------------------------------------------------------- //

export const withValueHandleBase = (WrappedComponent) => {
  return (receivedProps) => {

    // initial data
    const {
      value,
      whenValueChange,
    } = receivedProps;

    // input from user
    const handleValueChange = useCallback(
      (next) => whenValueChange(next, value),
      [whenValueChange]
    );

    const handleValueModify = useCallback(
      (increment) => handleValueChange(value + increment),
      [handleValueChange]
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

// ------------------------------------------------------------------------- //