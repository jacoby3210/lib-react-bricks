import React, { useCallback } from 'react';

// -------------------------------------------------------------------------- //
// A feature - to handle a change in the value of a component (variant type).
// -------------------------------------------------------------------------- //

export const withValueBoolean = (WrappedComponent) => (props) => {

  // initial data

  const {
    value = false,
    whenValueChange= (next, prev) => next,
    whenValueToggle= (prev) => !prev,
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
    value,
    whenValueChange: handleValueChange,
    handleValueToggle: handleValueToggle,
  };

  return <WrappedComponent {...updateProps} />;
};

// -------------------------------------------------------------------------- //