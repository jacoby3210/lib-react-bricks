import React, { useCallback, useEffect, useRef, useState } from 'react';

// -------------------------------------------------------------------------- //
// Layout - to display and edit multiline text (paragraph).
// -------------------------------------------------------------------------- //

export const Paragraph = props => {
	
  // initial data

	const {
    children, 
    forbidden, 
    max, 
    min, 
    rootRef,
		value, 
    whenValueChange, 
    whenValueModify,
    ...attributes
	} = props;

  // input handling

  const handleChange = useCallback(
    (evt) => whenValueChange(evt.target.value), 
    [whenValueChange]
  );

	// render 
  
	const paragraphProps  = {
    ...attributes,
		onChange: handleChange,  
    value
	};

	return (<textarea  {...paragraphProps} />);
};

// -------------------------------------------------------------------------- //