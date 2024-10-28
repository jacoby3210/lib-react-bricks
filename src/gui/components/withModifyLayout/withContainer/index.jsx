import React, { useRef, memo, forwardRef } from 'react';
// -------------------------------------------------------------------------- //
// HOC - to wrap base component into ui block (<div>).
// -------------------------------------------------------------------------- //

export const withContainer = (WrappedComponent) => {
  const MemoizedComponent = memo(WrappedComponent);

  const Container = (props, ref) => {

    // initial data
    const {
      id,
      className,
      children,
      Template,
      ...restProps
    } = props;

    // hooks
    const selfRef = useRef(null);

    // render
    return (
      <div id={id} ref={ref || selfRef} className={className}>
        <MemoizedComponent rootRef={selfRef} {...props}>
          {children}
        </MemoizedComponent>
      </div>
    );
  };

  return forwardRef(Container);
};

// -------------------------------------------------------------------------- //