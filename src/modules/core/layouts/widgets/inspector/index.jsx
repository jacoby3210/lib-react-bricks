import { useContainer, useValueBase } 
from '@lib-react-bricks/src/modules/core/advanced';
import { resolveClassName } 
from '@lib-react-bricks/src/modules/core/utils';

// -------------------------------------------------------------------------- //
//  Widget - which creates a UI for viewing / editing an object.
// -------------------------------------------------------------------------- //

const Container = ({children, className}) => 
  (<ul className={className}>{children}</ul>);

export const Template = props => {

  const ctxContainer = useContainer();
  const ctxValueBase = useValueBase();
  
  const { item } = props;
  
  const { className } = ctxContainer.state;
  const { value } = ctxValueBase.state;
  
  const resolveText = item.caption;
  const resolveValue = value[item.caption];

  if(resolveValue == undefined) {
    console.log(item, valueProps);
  }

  const valueProps = Array.isArray(resolveValue) 
    ? { 
      data: resolveValue.map(item => item.value),
    }
    : {
      data: item.props?.data,
      value: resolveValue,
    }
    // console.log(valueProps);
  
  return (
    <div 
      className={className} 
      name={item.caption} 
      type={item.datatype}
    >
      <label className={resolveClassName(className, 'label')}>
        {resolveText}
      </label>
      <item.Render { ... item.props } { ... valueProps}/>  
    </div>
  );
};

export const Inspector = {
  Container, 
  Template,
}

// -------------------------------------------------------------------------- //