import React, { useState, useCallback } from 'react';

// -------------------------------------------------------------------------- //
// A feature - to support a component with vertical / horizontal direction.
// -------------------------------------------------------------------------- //

export const withDirection = (WrappedComponent) => {

  return (props) => {

    // initial data
  
    const horizontalProps = {
      axis: "horizontal",
      cursor: "clientX",
      elementSize: "offsetWidth",
      rectOffset: "x",
      rectSize: "width",
      scrollDirect: "left",
      scrollOffset: "scrollLeft",
      scrollSize: "scrollWidth",
    }
    
    const verticalProps = {
      axis: "vertical",
      cursor: "clientY",
      elementSize: "offsetHeight",
      rectOffset: "y",
      rectSize: "height",
      scrollDirect: "top",
      scrollOffset: "scrollTop",
      scrollSize: "scrollHeight",
    }

    const {
      axis = true
    } = props;
    const axisProps = axis ? horizontalProps : verticalProps;

	  // render 

    const updateProps = {...props, axisProps};
    return <WrappedComponent {...updateProps} />;
  };
};

// -------------------------------------------------------------------------- //