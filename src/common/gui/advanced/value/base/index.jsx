import React, { useCallback } from 'react';

// -------------------------------------------------------------------------- //
// A feature - to handle a change in the value of a component (variant type).
// -------------------------------------------------------------------------- //

export const withValueBase = (WrappedComponent) => (props) => {

  // initial data

  const {
    value = null,
    validation = (value) => value,
    whenValueChange = (next, validate) => next, 
    whenValueModify = (m) => m,
  } = props;

  // input handling

  const handleValueChange = useCallback(
    (next) => whenValueChange(next),
    [whenValueChange]
  );

  const handleValueModify = useCallback(
    (increment) => whenValueModify(increment),
    [handleValueChange]
  );

// render

  const updateProps = {
    ...props,
    value,
    whenValueChange: handleValueChange,
    whenValueModify: handleValueModify,
  };

  return <WrappedComponent {...updateProps} />;

};

// -------------------------------------------------------------------------- //