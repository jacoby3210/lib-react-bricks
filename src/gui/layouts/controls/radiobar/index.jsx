import * as gCFG from "/src/gui/config"
import {Container} from "/src/gui/layouts/basics/container"
import * as code from "./code.jsx"
// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix: "radiobar"});
gCFG.applyPackage(cfg, gCFG.propPackageSourceData, {});
gCFG.applyPackage(cfg, gCFG.propPackageTemplate, {Template: code.TemplateDefault});
gCFG.applyPackage(cfg, gCFG.propPackageValueBase, {value: null});

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