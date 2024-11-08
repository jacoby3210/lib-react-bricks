import React, { useCallback } from 'react';

// -------------------------------------------------------------------------- //
//  A feature - to handle a change in the value of a component (text type).
// -------------------------------------------------------------------------- //

export const withValueLocale = (WrappedComponent) => {

  return (props) => {

    // initial data
    const {
      valueForbiddenChars: forbidden, 
      valueLengthMax: max,
      valueLengthMin: min,
      value,
      whenValueChange,
      whenValueModify,
    } = props;
    
    // hooks

    // const locale = useSelector(state => state.locale.items);
    
    // input handling

    const handleValueChange = useCallback(
      (next) => whenValueChange(next),
      [min, max, whenValueChange]
    );

    const handleValueModify = useCallback(
      (increment) =>{ whenValueModify( increment)},
      [whenValueModify, value]
    );

	// render 
  
    const updateProps = {
      ...props,
      whenValueChange: handleValueChange,
      whenValueModify: handleValueModify,
    };

    return <WrappedComponent {...updateProps} />;
  };
};

// -------------------------------------------------------------------------- //