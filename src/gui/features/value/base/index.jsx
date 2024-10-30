import React, { useCallback } from 'react';

// -------------------------------------------------------------------------- //
// A feature to handle a change in the value of a component (variant type).
// -------------------------------------------------------------------------- //

export const withValueBase = (WrappedComponent) => {

  return (props) => {

    // initial data

    const {
      value,
      whenValueChange,
    } = props;

    // input handling

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
      ...props,
      whenValueChange: handleValueChange,
      whenValueModify: handleValueModify,
    };

    return <WrappedComponent {...modifiedProps} />;
  };
};

// -------------------------------------------------------------------------- //