import {propValues, propTypes } from "./config"
import { DropdownButton } from './code';
// ------------------------------------------------------------------------- //
// React Component for rendering a dropout layouts.
// ------------------------------------------------------------------------- //

export const Component = props => {

  // initial data
  const {
    id,
    children,
    caption,
    shownState,
    setShownState,
    ...attributes
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

export const Dropout = {Component, propValues}

// ------------------------------------------------------------------------- //