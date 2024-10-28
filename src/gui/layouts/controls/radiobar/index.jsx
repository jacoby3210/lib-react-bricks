import * as globalCFG from "/src/gui/config"
import {Container} from "/src/gui/layouts/basics/container"
import * as code from "./code.jsx"
// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = globalCFG.createConfig("radiobar");
globalCFG.applyPackage(cfg, globalCFG.propPackageBase, {className:cfg.CSS_CLASS_DEFAULT});
globalCFG.applyPackage(cfg, globalCFG.propPackageSourceData, {});
globalCFG.applyPackage(cfg, globalCFG.propPackageTemplate, {Template: code.TemplateDefault});
globalCFG.applyPackage(cfg, globalCFG.propPackageValueBase, {value: null});

// -------------------------------------------------------------------------- //
// React Component to output multiple radio buttons as a single component.  
// -------------------------------------------------------------------------- //

const Component = props => {

  // initial props
  const {
    children, 
    filter, src, Template, 
    ...attributes
  } = props;
  
  // render
  return (
    <Container.Component 
      {...attributes}
    >
      {children}
    </Container.Component>
  );
};

Component.propTypes = cfg.propTypes;
export const RadioBar = {cfg, Component};

// -------------------------------------------------------------------------- //