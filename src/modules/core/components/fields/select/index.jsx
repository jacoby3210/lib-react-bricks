import { useContainer, useReveal, useValueOption } from '@lib-react-bricks/src/modules/core/advanced';
import { resolveClassName } from '@lib-react-bricks/src/modules/core/utils';

// -------------------------------------------------------------------------- //
// Layout - to select one option from the source list.
// -------------------------------------------------------------------------- //

const Controller = props => {
  
  const ctxReveal = useReveal();
  const ctxValueOption = useValueOption();

  const {className} = props;
  const {index, loop, max,  value} = ctxValueOption.state;
  const displayValue = value?.label || "Not Found"; 

  const handleClick = (evt) => {
    evt.stopPropagation();
    ctxReveal.dispatch({type:"TOGGLE"})
  }

  return (
    <button className={className} onClick={handleClick}>
      <span className={resolveClassName(className, 'label')}>{displayValue}</span>
      <span className={resolveClassName(className, 'sprite')}>
        <i className={'fa-solid fa-chevron-down'}></i>
      </span>
    </button>
  );
}

// -------------------------------------------------------------------------- //
// Template - to create a gui by metadata.
// -------------------------------------------------------------------------- //

const Template = props => {          
  
  const ctxContainer = useContainer();
  const ctxReveal = useReveal();
  const ctxValueOption = useValueOption();

  const {item, index} = props;
  const {className} = ctxContainer.state;
  
  const handleClick = (evt) => {
    evt.stopPropagation();
    ctxReveal.dispatch({type:"TOGGLE"})
    ctxValueOption.dispatch({type: "CHANGE_BY_INDEX", payload: {index}})
  }

  return (
    <option 
      className={resolveClassName(className, '-option')}
      cursor={ctxValueOption.state.index == index ? "true" : null}
      onClick={handleClick} 
      value={item?.id}
    >
      {item.label||item.id}
    </option>
  );
}

export const Select ={Controller, Template}

// -------------------------------------------------------------------------- //