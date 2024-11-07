import * as gCFG from "@lib-react-bricks/src/gui/config.jsx"
import { DropoutButton } from './code';

// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix:"dropout"});
gCFG.applyPackage(cfg, gCFG.propPackageValueBase, {value: null});

// -------------------------------------------------------------------------- //
// Layout - to render the content of the reveal.
// -------------------------------------------------------------------------- //

const Component = props => {

  // initial data

  const {
    children,
    className,
    caption,
    revealsState,
    setRevealsState,
  } = props;

  // render 
  
  const dropoutButtonProps = {
    className,
    caption, 
    onMouseDown: (evt) => {
      evt.stopPropagation();
      setRevealsState(!revealsState);
    }
  }

  return (
    revealsState 
      ? <>
          <DropoutButton {...dropoutButtonProps}/>
          {children}
        </>
      : <DropoutButton {...dropoutButtonProps}/>
  );
};

Component.propTypes = cfg.types;
export const Dropout = {cfg, Component}

// -------------------------------------------------------------------------- //