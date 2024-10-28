import * as cfg from "./config"
// -------------------------------------------------------------------------- //
// React component to render multiple items from a source in a template.
// -------------------------------------------------------------------------- //

export const Component = props => {

  // initial data
  const {
    filter, from, length, src, matchingItems, nonMatchingItems,
    Template,
  } = props;

  // render
  const children = matchingItems.slice(from, from + length).map(
    (item, i) => 
      <Template 
        className={`${cfg.CSS_CLASS_DEFAULT}-item`} 
        common={props}
        index={i}
        key={item.id || i}
        meta={item} 
    />);
  
  return (<>{children}</>);
};

Component.propTypes = cfg.propTypes;
export const Repeater = {cfg, Component}

// -------------------------------------------------------------------------- //