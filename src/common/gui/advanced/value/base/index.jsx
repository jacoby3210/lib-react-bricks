import React, { useCallback } from 'react';

// -------------------------------------------------------------------------- //
// A feature - to handle a change in the value of a component (variant type).
// -------------------------------------------------------------------------- //

export const withValueBase = (WrappedComponent) => (props) => {

  // initial data

  const {
    value = null,
    validate = (value) => value,
    whenValueChange = (next, validate) => next, 
    whenValueModify = (modifier, validate) => m,
  } = props;

  // input handling

  const handleValueChange = useCallback(
    (next) => whenValueChange(next, validate),
    [whenValueChange]
  );

  const handleValueModify = useCallback(
    (modifier) => whenValueModify(modifier, validate),
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