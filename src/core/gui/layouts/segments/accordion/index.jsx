import React, { useCallback, useEffect, useRef, useState } from 'react';

// -------------------------------------------------------------------------- //
// Widget - represents list of headers and their associated ui blocks.
// -------------------------------------------------------------------------- //

const Container = props => {

	// initial data
	const {children} = props;
  
	return (
    <>
      {children}
    </>
  );
};

// -------------------------------------------------------------------------- //
// Template - to create a gui by metadata.
// -------------------------------------------------------------------------- //

export const Template = (props) => {

  // initial data

  const { common, item, index } = props;
  const { 
    mode = "all", 
    value, 
    whenValueChange 
  } = common;

  // hooks
  
  const [openState, setOpenState] = useState(value);

  useEffect(() => {setOpenState(value.includes(index))}, [value]);

  // input handling
  
  const handleToggle = useCallback(
    (evt, idx) => {
      if (value.includes(idx)) {
        whenValueChange(mode === 'single' ? [] : value.filter(i => i !== idx));
      } else {
        whenValueChange(mode === 'single' ? [idx] : [...value, idx]);
      }
      evt.stopPropagation();
    },
    [value, whenValueChange, mode]
  );


  // render

  return (
    <details open={openState}>
      <summary onClick={(evt) => handleToggle(evt, index)}>
        {item.caption}
      </summary>
      <p>{item.content}</p>
    </details>
  );
};

export const Accordion = {Container, Template}

// -------------------------------------------------------------------------- //