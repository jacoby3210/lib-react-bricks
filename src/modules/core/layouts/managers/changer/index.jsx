import { useContainer, useValueOption } 
from '@lib-react-bricks/src/modules/core/advanced';
import { resolveClassName } 
from '@lib-react-bricks/src/modules/core/utils';

// -------------------------------------------------------------------------- //
// Layout - to change of displayed content in the view by special id.
// -------------------------------------------------------------------------- //

const Template = props =>{

  const ctxContainer = useContainer();
  const ctxValueBase = useValueOption();

  const { className } = ctxContainer.state;
  const { value } = ctxValueBase?.state;
  
  const {item, index} = props;

  const handleClick = (evt) => {
    ctxValueBase.dispatch({type: 'SET_VALUE_BY_ID', payload: {id: item.id}});
  }

  return <button 
    className= {resolveClassName(className, 'button')} 
    onClick= {handleClick}
    {...item}
  >
    {value}
  </button>;
}

export const Changer = {Template}

// -------------------------------------------------------------------------- //