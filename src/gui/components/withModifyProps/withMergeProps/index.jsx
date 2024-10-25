import React, { memo } from 'react';
import { mergeProps } from 'react-aria';
// ------------------------------------------------------------------------- //
// HOC to smartly merge the component's default and passed properties.       //
// ------------------------------------------------------------------------- //

export const withMergeProps = (defaultProps) => (WrappedComponent) => {
  const MemoizedComponent = memo(WrappedComponent);
  
  return (receivedProps) => {
    const props = mergeProps(defaultProps, receivedProps);
    return <MemoizedComponent {...props} />;
  };
};

// ------------------------------------------------------------------------- //