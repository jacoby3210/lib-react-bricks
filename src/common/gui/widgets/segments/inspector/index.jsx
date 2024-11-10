// -------------------------------------------------------------------------- //
//  Widget - to generate form to view/edit objects c JS (basic)
// -------------------------------------------------------------------------- //

const Container = props => {

  // initial data

  const {children} = props;

  // render 
  
  return (<ul>{children}</ul>);

}

export const Template = props => {

  // initial props

  const { common, item, index } = props;
  const value = common.value[item.caption];

  // input handling

  const whenValueChange = (next, prev) => 
    common.whenValueChange({...common.value, [item.caption]: next});

  const whenValueModify = (increment) => 
    common.whenValueChange({...common.value, [item.caption]: value + increment});

  // render

  const valueProps = {
    src: Array.isArray(value) ? value : common?.src,
    whenValueChange, whenValueModify, value
  };

  return (
    <div name={item.caption} type={item.datatype}>
      <label>{item.caption}</label>
      <item.Render {...item.props} {...valueProps}/>  
    </div>
  );
};

export const Inspector = {Container, Template}

// -------------------------------------------------------------------------- //