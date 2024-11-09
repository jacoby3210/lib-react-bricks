import React, { memo } from 'react';
import { mergeProps } from 'react-aria';

// -------------------------------------------------------------------------- //
// A feature to smartly merge default properties and passed properties.
// -------------------------------------------------------------------------- //

export const withMerge = (defaultProps) => (WrappedComponent) => {
  
  // initial data
  
  const MemoizedComponent = memo(WrappedComponent);
  
	// render 

  return (passedProps) => {
    const updateProps = mergeProps(defaultProps, passedProps);
    return <MemoizedComponent {...updateProps} />;
  };
  
};

// -------------------------------------------------------------------------- //