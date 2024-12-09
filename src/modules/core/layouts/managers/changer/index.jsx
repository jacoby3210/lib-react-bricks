import { useContainer, useValueBase } 
from '@lib-react-bricks/src/modules/core/advanced';
import { resolveClassName } 
from '@lib-react-bricks/src/modules/core/utils';

// -------------------------------------------------------------------------- //
// Layout Manager - to change of displayed content in the view by value.
// -------------------------------------------------------------------------- //

const Template = props =>{

  const ctxContainer = useContainer();
  const ctxValueBase = useValueBase();

  const { className } = ctxContainer.state;
  const { value } = ctxValueBase?.state;
  
  const {item, index} = props;

  const handleClick = (evt) => {
    ctxValueBase.dispatch({type: 'CHANGE', payload: {next: item.id}});
  }

  return <button 
    className={resolveClassName(className, 'button')} 
    data-selected={item.id == value ? true : null}
    onClick= {handleClick}
  >
    {item.caption}
  </button>;
}

export const Changer = {Template}

// -------------------------------------------------------------------------- //