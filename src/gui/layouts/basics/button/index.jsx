import {useRef} from "react"
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

  const { action, label, } = props;
  
  // hooks
  
  const dispatch = useDispatch();

  // input handling

  const handleClick = () => dispatch(action());

  // render
  
  return (
    <button onClick={handleClick}>
      {label}
    </button>
  );
};

Component.propTypes = cfg.types;
export const Button = {cfg, Component}

// -------------------------------------------------------------------------- //