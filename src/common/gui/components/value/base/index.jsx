import React, { useCallback } from 'react';

// -------------------------------------------------------------------------- //
// A feature - to handle a change in the value of a component (variant type).
// -------------------------------------------------------------------------- //

export const withValueBase = (WrappedComponent) => {

  return (props) => {

    // initial data

    const {
      value = value,
      whenValueChange = (next, prev) => next, 
      whenValueModify = (m) => m,
    } = props;

    // input handling

    const handleValueChange = useCallback(
      (next) => whenValueChange(next, value),
      [whenValueChange]
    );

    const handleValueModify = useCallback(
      (increment) => whenValueModify(increment),
      [handleValueChange]
    );

	// render

    const updateProps = {
      ...props,
      whenValueChange: handleValueChange,
      whenValueModify: handleValueModify,
    };

    return <WrappedComponent {...updateProps} />;
  };
};

// -------------------------------------------------------------------------- //