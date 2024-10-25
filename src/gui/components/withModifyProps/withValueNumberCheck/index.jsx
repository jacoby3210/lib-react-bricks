import React, { useCallback } from 'react';
// ------------------------------------------------------------------------- //
// HOC to сhecks the numeric value for compliance with additional conditions.   //
// ------------------------------------------------------------------------- //

export const withValueNumberCheck = (WrappedComponent) => {
  return (receivedProps) => {

    // initial data
    const {
      valueMode: mode,
      valueRangeMax: max,
      valueRangeMin: min,
      valueStep: step,
      value,
      whenValueChange,
    } = receivedProps;

    // supporting methods
    const getDecimalPlaces = (num) => {
      const decimalPart = num.toString().split('.')[1];
      return decimalPart ? decimalPart.length : 0;
    };

    const calculateNormalizedValue = (next) => {
      const wrappedValue = mode ? (next + max) % max : Math.min(next, max - 1);
      const steppedValue = Math.round(wrappedValue / step) * step;
      return parseFloat(steppedValue.toFixed(getDecimalPlaces(step)));
    };

    // input from user
    const handleValueChange = useCallback(
      (next) => {
        const normalizedValue = calculateNormalizedValue(Math.max(Math.min(next, max), min));
        whenValueChange(normalizedValue);
      },
      [min, max, step, mode, whenValueChange]
    );

    const handleValueModify = useCallback(
      (increment) => handleValueChange(parseFloat(value) + increment),
      [handleValueChange, value]
    );

	// render 
    const modifiedProps = {
      ...receivedProps,
      whenValueChange: handleValueChange,
      whenValueModify: handleValueModify,
    };

    return <WrappedComponent {...modifiedProps} />;
  };
};

// ------------------------------------------------------------------------- //