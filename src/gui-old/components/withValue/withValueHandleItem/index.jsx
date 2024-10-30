import React, { useCallback } from 'react';
import {withValueHandleNumber} from '../withValueHandleNumber'
// -------------------------------------------------------------------------- //
// HOC to handle a change in the value of a component (source option type).   //
// -------------------------------------------------------------------------- //

export const withValueHandleItem = (WrappedComponent) => {
  return (receivedProps) => {

    // initial data
    const EnchancedComponent = withValueHandleNumber(WrappedComponent)
    const {src} = receivedProps;

    // supporting methods

    // input handling

    // hooks

	  // render 
    const modifiedProps = {
      ...receivedProps,
      valueRangeMax: src.length,
      valueRangeMin: 0,
      valueStep: 1,
    };

    return <EnchancedComponent {...modifiedProps} />;
  };
};

// -------------------------------------------------------------------------- //