import { DropdownButton } from './code';
import * as cfg from "./config"
// ------------------------------------------------------------------------- //
// React Component for rendering a dropout layouts.
// ------------------------------------------------------------------------- //

export const Component = props => {

  // initial data
  const {
    children,
    caption,
    shownState,
    setShownState,
  } = props;

  // render 
  const handleMouseDown = (evt) => {
    evt.stopPropagation();
    setShownState(!shownState);
  }

  return (
    shownState 
      ? <>
          <DropdownButton caption={caption} onMouseDown={handleMouseDown}/>
          {children}
        </> 
      : <DropdownButton caption={caption} onMouseDown={handleMouseDown}/>
  );
};

Component.propTypes = cfg.propTypes;
export const Dropout = {cfg, Component}

// ------------------------------------------------------------------------- //