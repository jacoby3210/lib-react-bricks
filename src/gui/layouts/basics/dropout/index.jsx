import * as globalCFG from "/src/gui/config.jsx"
import { DropoutButton } from './code';
// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = globalCFG.createConfig("dropout");
globalCFG.applyPackage(cfg, globalCFG.propPackageBase, {className:cfg.CSS_CLASS_DEFAULT});
globalCFG.applyPackage(cfg, globalCFG.propPackageValueBase, {value: null});

// -------------------------------------------------------------------------- //
// React Component for rendering a dropout layouts.
// -------------------------------------------------------------------------- //

const Component = props => {

  // initial data
  const {
    children,
    caption,
    className,
    shownState,
    setShownState,
  } = props;

  // render 
  const dropoutButtonProps = {
    caption, 
    className,
    onMouseDown: (evt) => {
      evt.stopPropagation();
      setShownState(!shownState);
    }
  }

  return (
    shownState 
      ? <><DropoutButton {...dropoutButtonProps}/>{children}</>
      : <DropoutButton {...dropoutButtonProps}/>
  );
};

Component.propTypes = cfg.types;
export const Dropout = {cfg, Component}

// -------------------------------------------------------------------------- //