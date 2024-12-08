import { useContainer, useReveal, useValueLiteral, useValueOption } 
from '@lib-react-bricks/src/modules/core/advanced';
import { resolveClassName } 
from '@lib-react-bricks/src/modules/core/utils';
import { filter } from './utils';

// -------------------------------------------------------------------------- //
// Layout - to show text line field with autocomplete suggestions.
// -------------------------------------------------------------------------- //

const Controller = props => {
  
	const ctxReveal = useReveal();
  const ctxValueLiteral = useValueLiteral();
  const ctxValueOption = useValueOption();
  
  const { className, data } = props;
	const {index} = ctxValueOption.state;
	const {value} = ctxValueLiteral.state;

  const valueResolve = index == -1 ? value : data[index].label || data[index].id;

  const handleChange = (evt) => {
    
    ctxValueOption.dispatch({type: "CHANGE_BY_VALUE_TEXT", payload: {text: evt.target.value}})
    ctxValueLiteral.dispatch({type: "CHANGE", payload: {next: evt.target.value}})
    ctxReveal.dispatch({ type: "SHOW" })

  };
  
  const handleKeyDown = (evt) => {
    
    switch (evt.key) {
        
      case 'ArrowDown': 
        ctxValueOption.dispatch({ type: 'MOVE_CURSOR_DOWN' });  
        evt.preventDefault();
        break;
      
      case 'ArrowUp':   
        ctxValueOption.dispatch({ type: 'MOVE_CURSOR_UP' });    
        evt.preventDefault();
        break;
        
      case 'Enter':
        ctxReveal.dispatch({type:"TOGGLE"})
        break;
      
      default: break;

    }

  };

  const inputProps  = {
    className:  resolveClassName(className, 'input'), 
    onChange:   handleChange,
    onClick:    (evt) => {evt.stopPropagation();},
    onFocus:    (evt) => {ctxReveal.dispatch({type:"SHOW"});},
    onKeyDown:  handleKeyDown,
    value: valueResolve
  };

	return (<input onChange={handleChange} {...inputProps} />);

};

// -------------------------------------------------------------------------- //
// Template - to create a gui by metadata.
// -------------------------------------------------------------------------- //

const Template = (props) => {
  
  const ctxContainer = useContainer();
  const ctxReveal = useReveal();
  const ctxValueOption = useValueOption();
  
  const { item, index } = props;
  const { className } = ctxContainer.state;

  const textResolve = item.label || item.id;

  const handleClick = (evt) => {
    evt.stopPropagation();
    ctxReveal.dispatch({type:"TOGGLE"})
    ctxValueOption.dispatch({type: "CHANGE_BY_VALUE_ID", payload: {id: item.id}})
  }

  return (
    <option 
      className={resolveClassName(className, '-option')}
      cursor={ctxValueOption.state.index == index ? "true" : null}
      onClick={handleClick} 
      value={item?.value}
    >
      {textResolve}
    </option>
  );
};

export const Advisor = { 
  filter,
  Controller, 
  Template,
 }

// -------------------------------------------------------------------------- //