import {useRef} from "react"
import * as gCFG from "/src/gui/config.jsx"
// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix:"container"});
gCFG.applyPackage(cfg, gCFG.propPackageValueBase);

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