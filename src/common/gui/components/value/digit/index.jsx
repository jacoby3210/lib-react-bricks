import React, { useCallback } from 'react';

// -------------------------------------------------------------------------- //
// A feature - to handle a change in the value of a component (numeric type).
// -------------------------------------------------------------------------- //

export const withValueDigit = (WrappedComponent) => {
  
  return (props) => {

    // initial data

    const {
      valueMode: mode = false,
      valueRangeMax: max = 100,
      valueRangeMin: min = 0,
      valueStep: step = 1,
      value = 0,
      whenValueChange = (next, prev) => next, 
      whenValueModify = (m) => m,
    } = props;

    // supporting methods

    const getDecimalPlaces = (num) => {
      const decimalPart = num.toString().split('.')[1];
      return decimalPart ? decimalPart.length : 0;
    };

    const calculateNormalizedValue = (next) => {
      const wrappedValue = mode ? (next + max) % max : Math.max(Math.min(next, max));
      const steppedValue = Math.round(wrappedValue / step) * step;
      return parseFloat(steppedValue.toFixed(getDecimalPlaces(step)));
    };

    // input handling

    const handleValueChange = useCallback(
      (next) => whenValueChange(calculateNormalizedValue(next)),
      [min, max, step, mode, whenValueChange]
    );

    const handleValueModify = useCallback(
      (increment) => {handleValueChange(calculateNormalizedValue(value + increment))},
      [whenValueModify, value]
    );

	// render

    const updateProps = {
      ...props,
      valueMode: mode,
      valueRangeMax: max,
      valueRangeMin: min,
      valueStep: step,
      value,
      whenValueChange: handleValueChange,
      whenValueModify: handleValueModify,
    };

    return <WrappedComponent {...updateProps} />;
  };
};

// -------------------------------------------------------------------------- //