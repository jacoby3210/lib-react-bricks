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
      offset: "x",
      size: "width",
    }
    
    const verticalProps = {
      axis: "vertical",
      cursor: "clientY",
      offset: "y",
      size: "height",
    }

    const {axis, ...attributes} = props;
    const axisProps = axis ? horizontalProps : verticalProps;

	  // render 

    const modifiedProps = {...props, axisProps};
    return <WrappedComponent {...modifiedProps} />;
  };
};


// -------------------------------------------------------------------------- //