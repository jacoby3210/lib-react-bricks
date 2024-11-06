import { useDispatch } from 'react-redux';
import * as gCFG from "@lib-react-bricks/src/gui/config.jsx"

// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix:"button"});
gCFG.applyPackage(cfg, gCFG.propPackageValueBase);

// -------------------------------------------------------------------------- //
// Layout - to represent a button that calls an action from store.
// -------------------------------------------------------------------------- //

export const Component = props => {

  // initial props

  const { action, children, label, onClick, } = props;
  
  // hooks
  
  const dispatch = action ? useDispatch() : null;

  // input handling

  const handleClick = action ? (evt) => dispatch(action()) : onClick;

  // render
  
  return (
    <button onClick={handleClick}>
      {label || children}
    </button>
  );
};

Component.propTypes = cfg.types;
export const Button = {cfg, Component}

// -------------------------------------------------------------------------- //