import React, { memo } from 'react';
import { mergeProps } from 'react-aria';

// -------------------------------------------------------------------------- //
// A feature to smartly merge default properties and passed properties.
// -------------------------------------------------------------------------- //

export const withMerge = (className, defaultProps={}) => (WrappedComponent) => {
  
  // initial data
  
  const MemoizedComponent = memo(WrappedComponent);
  
	// render 

  return (passedProps) => {
    const updateProps = mergeProps({className, ... defaultProps}, passedProps);
    // console.log(updateProps)
    return <MemoizedComponent {...updateProps} />;
  };
  
};

// -------------------------------------------------------------------------- //