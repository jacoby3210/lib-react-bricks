import React, { useCallback, useMemo } from 'react';

// -------------------------------------------------------------------------- //
//  A feature - to handle a change in the value of a component (text type).
// -------------------------------------------------------------------------- //

export const withValueText = (WrappedComponent) => (props) => {

  // initial data

  const {
    forbidden = "", 
    max = 100,
    min = 0,
    value = "",
    whenValueChange = (next, prev) => next, 
    whenValueModify = (modifier) => modifier,
  } = props;

  // supporting methods

  const resolve = (variable) => (typeof variable === "function" ? variable(props) : variable)

  const validate = (next, prev) => {
    const forbiddenPattern = new RegExp(`[${forbidden.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}]`);
    return forbiddenPattern.test(next) ? prev : next;
  }

  // hooks

  const maxMemo = useMemo(() => resolve(max), [max, value]);
  const minMemo = useMemo(() => resolve(min), [min, value]);

  // input handling

  const handleValueChange = useCallback(
    (next) => whenValueChange(next, validate),
    [value, whenValueChange]
  );

  const handleValueModify = useCallback(
    (modifier) => whenValueModify(modifier, validate),
    [value, whenValueModify]
  );

// render 

  const updateProps = {
    ...props,
    forbidden, 
    max: maxMemo,
    min: minMemo,
    value,
    whenValueChange: handleValueChange,
    whenValueModify: handleValueModify,
  };

  return <WrappedComponent {...updateProps} />;

};

// -------------------------------------------------------------------------- //