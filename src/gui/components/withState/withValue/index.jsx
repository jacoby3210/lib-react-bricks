import React, { useState } from 'react';
// ------------------------------------------------------------------------- //
// HOC to control the state of the value in the wrapped component.           //
// ------------------------------------------------------------------------- //

export const withValue = (WrappedComponent) => {

  return props => {

    // initial props
    const {
      onChange,
      value,
      whenValueChange = (next, prev) => next,
      ...attributes
    } = props;

    // hooks
    const [valueState, setValueState] = useState(value);
    const handleChange = (next) => {
      setValueState(prev => whenValueChange(next, prev));
    };
    const handleModify = (next) => {
      setValueState(prev => whenValueChange(prev + next, prev));
    };

    return (
      <WrappedComponent
        {...attributes}
        whenValueChange={handleChange}
        whenValueModify={handleModify}
        value={valueState}
      />
    );
  };

};

// ------------------------------------------------------------------------- //