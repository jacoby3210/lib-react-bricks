import {useRef} from "react"
import * as globalCFG from "/src/gui/config.jsx"
// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = globalCFG.createConfig("container");
globalCFG.applyPackage(cfg, globalCFG.propPackageBase, {className:cfg.CSS_CLASS_DEFAULT});
globalCFG.applyPackage(cfg, globalCFG.propPackageValueBase);

// -------------------------------------------------------------------------- //
// React Component for use as a container for other components.
// -------------------------------------------------------------------------- //

export const Component = props => {

    // initial props
    const {
      id,
      className,
      children,
      nonMatchingItems, matchingItems,
      value,
      whenValueChange,
      whenValueModify,
    } = props;

    // hooks
    const selfRef = useRef(null);

    // render
    return (
      <div id={id} className={className} value={value} >
          {children}
      </div>
    );
};

Component.propTypes = cfg.types;
export const Container = {cfg, Component}

// -------------------------------------------------------------------------- //