import React, { useEffect, useRef, useState } from 'react';
import { Advisor } from '/src/gui/layouts/fields/advisor';
import * as cfg from "./config"
// ------------------------------------------------------------------------- //
// React Component for displaying the add/remove tags interface. 
// ------------------------------------------------------------------------- //

export const Component = props => {

  // initial data
  const {
    ...attributes
  } = props;

  // hooks
  // const selfRef = useRef(null);
  // const [valuesState, setValuesState] = useState(values);
  // useEffect(() => {setValuesState(values);}, [src, values]);

  // input from user
  // const handleTagButtonClick = (evt) => {
  //   if(evt.target.tagName != "BUTTON") return;
  //   const i = valuesState.findIndex(
  //     item => item.text === evt.currentTarget.children[0].innerText
  //   );
  //   setValuesState(
  //     prev => [
  //       ...prev.slice(0, i),
  //       ...prev.slice(i + 1),
  //     ]
  //   );
  // }

  // render 
  // const whenUpdateValueState = (next, prev) => {
  //   const i = src.findIndex(item => item.caption == next);
  //   if(i != -1) setValuesState([...valuesState, src[i]]);
  //   return '';
  // };

  const advisorProps = {
    ...props,
    //   src: mode == "all" 
  //     ? src 
  //     : src.filter(item => !valuesState.some(toRemove => toRemove.id === item.id)),
  //   value: '', 
  //   whenUpdateValueState
  };

  const viewProps = {
    // length: valuesState.length, 
    // src:valuesState,
    // TemplateViewItem: TemplateCloudSelectTag,
    // templateViewItemProps: {onClick: handleTagButtonClick}
  }

  return (
    < >
      <Advisor.Component {...advisorProps} />
      {/* <View {...viewProps} /> */}
    </>
  );
};

Component.propTypes = cfg.propTypes;
export const Cloud = {cfg, Component}

// ------------------------------------------------------------------------- //