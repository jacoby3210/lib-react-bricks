import React, { useCallback } from 'react';

// -------------------------------------------------------------------------- //
// A feature - to handle a change in the value of a component (variant type).
// -------------------------------------------------------------------------- //

export const withValueBoolean = (WrappedComponent) => {

  return (props) => {

    // initial data

    const {
      value = false,                                    // current value.
      whenValueChange= (next, prev) => next,           // callback to handle the value state update.
      whenValueToggle= (prev) => !prev,                // callback to modify the value state by coeff.
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