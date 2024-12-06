import { useCallback, useRef, useState } from 'react';
import { useContainer, useReveal, useValueOption } from '@lib-react-bricks/src/modules/core/advanced';
import { resolveClassName } from '@lib-react-bricks/src/modules/core/utils';

// -------------------------------------------------------------------------- //
// Layout - to show text line field with autocomplete suggestions.
// -------------------------------------------------------------------------- //

const Controller = props => {
  
	const ctxReveal = useReveal();
  const ctxValueOption = useValueOption();
  
  const { className } = props;
	
  const input = useRef(null);
  
  const handleChange = useCallback(
    (evt) => {
      if(ctxValueOption.state.value.value == evt.target.value) return; 
      ctxValueOption.dispatch({
        type: "CHANGE_BY_VALUE", 
        payload: {value: {id: -1, value: evt.target.value}}
      })
    }, 
    [ctxValueOption]
  );
  
  const inputProps  = {
    className: resolveClassName(className, 'input'), 
    onClick:    (evt) => {evt.stopPropagation();},
    onFocus:    (evt) => {ctxReveal.dispatch({type:"SHOW"});},
    value: ctxValueOption.state.value.value || ctxValueOption.state.value
  };

	return (<input ref={input} onChange={handleChange} {...inputProps} />);

};

// -------------------------------------------------------------------------- //
// Template - to create a gui by metadata.
// -------------------------------------------------------------------------- //

const Template = (props) => {
  
  const ctxContainer = useContainer();
  const ctxReveal = useReveal();
  const ctxValueOption = useValueOption();
  
  const {item, index} = props;
  const {className} = ctxContainer.state;

  const handleClick = (evt) => {
    evt.stopPropagation();
    ctxReveal.dispatch({type:"TOGGLE"})
    ctxValueOption.dispatch({type: "CHANGE_BY_VALUE", payload: {value: item}})
  }

  return (
    <option 
      className={resolveClassName(className, '-option')}
      cursor={ctxValueOption.state.index == index ? "true" : null}
      onClick={handleClick} 
      value={item?.value}
    >
      {item.value||item.id}
    </option>
  );
};

export const Advisor = { Controller, Template }

// -------------------------------------------------------------------------- //