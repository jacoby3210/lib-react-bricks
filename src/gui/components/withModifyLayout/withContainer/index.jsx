import React, { useRef, memo, forwardRef } from 'react';
// ------------------------------------------------------------------------- //
// HOC - to wrap base component into ui block (<div>).
// ------------------------------------------------------------------------- //

export const withContainer = (WrappedComponent) => {
  const MemoizedComponent = memo(WrappedComponent);

  const Container = (props, ref) => {
    const {
      id,
      className,
      children,
      Template,
      ...restProps
    } = props;

    const selfRef = useRef(null);

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

// ------------------------------------------------------------------------- //