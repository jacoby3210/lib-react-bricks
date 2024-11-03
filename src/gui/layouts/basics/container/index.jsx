import {useRef} from "react"
import * as gCFG from "/src/gui/config.jsx"

// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix:"container"});
gCFG.applyPackage(cfg, gCFG.propPackageValueBase);

// -------------------------------------------------------------------------- //
// Layout - to use as a universal container for the contents.
// -------------------------------------------------------------------------- //

export const Component = props => {

  // initial props

  const { id, className, children, value } = props;

  // hooks

  const selfRef = useRef(null);

  // render
  
  return (
    <div id={id} className={className} ref={selfRef} value={value} >
      {children}
    </div>
  );
};

Component.propTypes = cfg.types;
export const Container = {cfg, Component}

// -------------------------------------------------------------------------- //