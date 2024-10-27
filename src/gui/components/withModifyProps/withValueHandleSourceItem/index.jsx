import React, { useCallback } from 'react';
import {withValueHandleNumber} from '../withValueHandleNumber'
// ------------------------------------------------------------------------- //
// HOC to handle a change in the value of a component (numeric type).        //
// ------------------------------------------------------------------------- //

export const withValueHandleSourceItem = (WrappedComponent) => {
  return (receivedProps) => {

    // initial data
    const {
      src,
      whenValueChange,
      whenValueModify,
    } = receivedProps;
    const EnchancedComponent = withValueHandleNumber(WrappedComponent)

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

// ------------------------------------------------------------------------- //