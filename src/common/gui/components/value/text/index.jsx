import React, { useCallback } from 'react';

// -------------------------------------------------------------------------- //
//  A feature - to handle a change in the value of a component (text type).
// -------------------------------------------------------------------------- //

export const withValueText = (WrappedComponent) => {

  return (props) => {

    // initial data

    const {
      forbidden = "", 
      max = 100,
      min = 0,
      value = "",
      whenValueChange = (next, prev) => next, 
      whenValueModify = (m) => m,
    } = props;

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
  
    const updateProps = {
      ...props,
      forbidden, 
      max,
      min,
      value,
      whenValueChange: handleValueChange,
      whenValueModify: handleValueModify,
    };

    return <WrappedComponent {...updateProps} />;
  };
};

// -------------------------------------------------------------------------- //