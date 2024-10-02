import { DropoutButton } from './code';
import * as cfg from "./config"
// ------------------------------------------------------------------------- //
// React Component for rendering a dropout layouts.
// ------------------------------------------------------------------------- //

export const Component = props => {

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

Component.propTypes = cfg.propTypes;
export const Dropout = {cfg, Component}

// ------------------------------------------------------------------------- //