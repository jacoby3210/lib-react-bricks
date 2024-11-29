import { useCallback } from 'react';

// -------------------------------------------------------------------------- //
// A feature - to handle a change in the value of a component (variant type).
// -------------------------------------------------------------------------- //

export const withValueBoolean = (WrappedComponent) => (props) => {

  // initial data

  const {
    value = false,
    whenValueChange = (next, validate) => next, 
    whenValueToggle= (prev, validate) => !prev,
  } = props;

  // input handling

  const handleValueChange = useCallback(
    (next) => whenValueChange(next),
    [whenValueChange]
  );

  const handleValueToggle = useCallback(
    () => handleValueToggle(!value),
    [handleValueChange]
  );

// render

  const updateProps = {
    ...props,
    value,
    whenValueChange: handleValueChange,
    handleValueToggle: handleValueToggle,
  };

  return <WrappedComponent {...updateProps} />;
};

// -------------------------------------------------------------------------- //