
// -------------------------------------------------------------------------- //
// Layout to generate a gui for an item in an source data by default.         //
// -------------------------------------------------------------------------- //

export const Item = props => {

    // initial data

    const {common, item, ...attributes} = props;

    // render 
    
    return (<li id={item.id} name={item.name} {...attributes}>{item?.text}</li>);

  };
  
// -------------------------------------------------------------------------- //