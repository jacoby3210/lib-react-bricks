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
  const handleClick = (evt) => {
    evt.stopPropagation();
    setShownState(!shownState)
  }

  return (
    shownState 
      ? <>
          <DropdownButton caption={caption} onClick={handleClick}/>
          {children}
        </> 
      : <DropdownButton caption={caption} onClick={handleClick}/>
  );
};

export const Dropout = {Component, propValues}

// ------------------------------------------------------------------------- //