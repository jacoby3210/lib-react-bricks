import React, { useRef, memo, forwardRef } from 'react';

// -------------------------------------------------------------------------- //
//  A feature - to wrap base component into ui block (<div>).
// -------------------------------------------------------------------------- //

export const withContainer = (WrappedComponent) => {

  return (props) => {

    // initial data
    
    const {
      id, 
      className, 
      children, 
      value = "none"
    } = props;

    // hooks
    
    const selfRef = useRef(null);

    // render
    
    return (
      <div id={id} ref={selfRef} className={className} value={value}>
        <WrappedComponent rootRef={selfRef} {...props}>
          {children}
        </WrappedComponent>
      </div>
    );
  };

};

// -------------------------------------------------------------------------- //