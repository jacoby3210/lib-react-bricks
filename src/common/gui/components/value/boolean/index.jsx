import React, { useCallback } from 'react';

// -------------------------------------------------------------------------- //
// A feature - to handle a change in the value of a component (variant type).
// -------------------------------------------------------------------------- //

export const withValueBoolean = (WrappedComponent) => {

  return (props) => {

    // initial data

    const {
      value,
      whenValueChange,
      whenValueToggle,
    } = props;

    // input handling

    const handleValueChange = useCallback(
      (next) => whenValueChange(next, value),
      [whenValueChange]
    );

    const handleValueToggle = useCallback(
      () => handleValueToggle(!value),
      [handleValueChange]
    );

	// render

    const updateProps = {
      ...props,
      whenValueChange: handleValueChange,
      handleValueToggle: handleValueToggle,
    };

    return <WrappedComponent {...updateProps} />;
  };
};

// -------------------------------------------------------------------------- //