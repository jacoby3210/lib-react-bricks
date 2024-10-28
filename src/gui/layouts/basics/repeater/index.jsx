import * as globalCFG from "/src/gui/config.jsx"
import * as code from "./code"
// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = globalCFG.createConfig("repeater");
globalCFG.applyPackage(cfg, globalCFG.propPackageBase, {className:cfg.CSS_CLASS_DEFAULT});
globalCFG.applyPackage(cfg, globalCFG.propPackageSourceData, {});
globalCFG.applyPackage(cfg, globalCFG.propPackageTemplate, {Template: code.TemplateDefault});

// -------------------------------------------------------------------------- //
// React component to render multiple items from a source in a template.
// -------------------------------------------------------------------------- //

const Component = props => {

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
  
  return (
    <>
      {children}
    </>
  );
};

Component.propTypes = cfg.types;
export const Repeater = {cfg, Component}

// -------------------------------------------------------------------------- //