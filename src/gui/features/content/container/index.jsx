import React, { useRef, memo, forwardRef } from 'react';

// -------------------------------------------------------------------------- //
//  A feature to wrap base component into ui block (<div>).
// -------------------------------------------------------------------------- //

export const withContainer = (WrappedComponent) => {

  return (props) => {

    // initial data
    
    const MemoizedComponent = memo(WrappedComponent);
    const {id, className, children, value} = props;

    // hooks
    
    const selfRef = useRef(null);

    // render
    
    return (
      <div id={id} ref={selfRef} className={className} value={value}>
        <MemoizedComponent rootRef={selfRef} {...props}>
          {children}
        </MemoizedComponent>
      </div>
    );
  };

};

// -------------------------------------------------------------------------- //