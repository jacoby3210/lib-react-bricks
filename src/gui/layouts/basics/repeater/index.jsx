import * as gCFG from "/src/gui/config.jsx"
import * as code from "./code"
// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix: "repeater"});
gCFG.applyPackage(cfg, gCFG.propPackageSourceData, {});
gCFG.applyPackage(cfg, gCFG.propPackageTemplate, {Template: code.TemplateDefault});

// -------------------------------------------------------------------------- //
// React component to render multiple items from a source in a template.
// -------------------------------------------------------------------------- //

const Component = props => {

  // initial data
  const {
    filter, from, length, src, matchingItems, nonMatchingItems,
    Template = code.TemplateDefault,
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
  
  return (
    <>
      {children}
    </>
  );
};

Component.propTypes = cfg.types;
export const Repeater = {cfg, Component}

// -------------------------------------------------------------------------- //