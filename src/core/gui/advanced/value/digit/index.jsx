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
    whenValueChange = (next, validate) => next, 
    whenValueModify = (modifier, validate) => m,
  } = props;

  // supporting methods

  const getDecimalPlaces = (num) => {
    const decimalPart = num.toString().split('.')[1];
    return decimalPart ? decimalPart.length : 0;
  };
  
  const resolve = (variable) => (typeof variable === "function" ? variable(props) : variable)

  const validate = (next) => {
    const wrappedValue = modular ? (next + maxMemo) % maxMemo : Math.max(Math.min(next, maxMemo), minMemo);
    const steppedValue = Math.round(wrappedValue / step) * step;
    return parseFloat(steppedValue.toFixed(getDecimalPlaces(step)));
  };

  // hooks
  
  const maxMemo = useMemo(() => resolve(max), [max, value]);
  const minMemo = useMemo(() => resolve(min), [min, value]);

  // input handling

  const handleValueChange = useCallback(
    (next) => whenValueChange(next, validate),
    [maxMemo, minMemo, step, modular, whenValueChange, value]
  );

  const handleValueModify = useCallback(
    (modifier) => whenValueModify(modifier, validate),
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