// -------------------------------------------------------------------------- //
// Layout - to generate a gui for an item in an source data by default.
// -------------------------------------------------------------------------- //

const Container = props => {

  // initial data

  const {className, children} = props;

  // render 
  
  return (<ul className={className}>{children}</ul>);

}

const Template = props => {

  // initial data

  const {common, item, ...attributes} = props;

  // render 
  
  return (<li id={item.id} name={item.name} {...attributes}>{item?.text}</li>);

};
  
export const List = {Container, Template}

// -------------------------------------------------------------------------- //