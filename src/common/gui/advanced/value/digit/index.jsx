import React, { useCallback, useMemo } from 'react';

// -------------------------------------------------------------------------- //
// A feature - to handle a change in the value of a component (numeric type).
// -------------------------------------------------------------------------- //

export const withValueDigit = (WrappedComponent) => (props) => {

  // initial data

  const {
    modular = false,
    max = 100,
    min = 0,
    step = 1,
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
    console.log(1, maxMemo, next)
    const wrappedValue = modular ? (next + maxMemo) % maxMemo : Math.max(Math.min(next, maxMemo));
    const steppedValue = Math.round(wrappedValue / step) * step;
    return parseFloat(steppedValue.toFixed(getDecimalPlaces(step)));
  };

  // hooks
  
  const maxMemo = useMemo(
    () => (typeof max === "function" ? max(props) : max), 
    [max, value]
  );

  const minMemo = useMemo(
    () => (typeof min === "function" ? min(props) : min), 
    [min, value]
  );

  // input handling

  const handleValueChange = useCallback(
    (next) => whenValueChange(calculateNormalizedValue(next)),
    [maxMemo, minMemo, step, modular, whenValueChange, value]
  );

  const handleValueModify = useCallback(
    (increment) => {handleValueChange(calculateNormalizedValue(value + increment))},
    [whenValueModify, value]
  );

// render

  const updateProps = {
    ...props,
    modular,
    max: maxMemo,
    min: minMemo,
    step,
    value,
    whenValueChange: handleValueChange,
    whenValueModify: handleValueModify,
  };

  return <WrappedComponent {...updateProps} />;
};

// -------------------------------------------------------------------------- //