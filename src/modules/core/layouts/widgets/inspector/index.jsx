import { useContainer, useValueBase } 
from '@lib-react-bricks/src/modules/core/advanced';
import { resolveClassName } 
from '@lib-react-bricks/src/modules/core/utils';

// -------------------------------------------------------------------------- //
//  Widget - which creates a UI for viewing / editing an object.
// -------------------------------------------------------------------------- //

const Container = ({children}) => (<ul>{children}</ul>);

export const Template = props => {

  const ctxContainer = useContainer();
  const ctxValueBase = useValueBase();
  
  const { item, index, ...attributes } = props;
  
  const { className, mode } = ctxContainer.state;
  const { value } = ctxValueBase.state;
  
  const resolveText = item.text;

  const valueProps = {
    data: Array.isArray(value) ? value : item.props?.data,
    value: value[item.caption]
  };

  return (
    <div 
      className={className} 
      name={item.caption} 
      type={item.datatype}
    >
      <label className={resolveClassName(className, 'checkbox')}>
        {item.caption}
      </label>
      <item.Render {...item.props} {...valueProps}/>  
    </div>
  );
};

export const Inspector = {
  Container, 
  Template,
}

// -------------------------------------------------------------------------- //