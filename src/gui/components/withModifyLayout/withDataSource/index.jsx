import React, { memo, useMemo } from 'react';
// ------------------------------------------------------------------------- //
// HOC to map multiple child nodes by data source and JSX template.          //
// ------------------------------------------------------------------------- //

export const withDataSource = (WrappedComponent) => {
  const MemoizedComponent = memo(WrappedComponent);

  return (props) => {

    // initial data
    const {
      src = [],
      Template,
      ...attributes
    } = props;

    // render
    const children = useMemo(() => 
      src.map((meta, index) => (
        <Template 
          key={meta.id || index} 
          common={props} 
          index={index} 
          meta={meta}  
        />
      )),
      [src, Template, attributes]
    );

    return (
      <MemoizedComponent {...props}>
        {children}
      </MemoizedComponent>
    );
  };
};


// ------------------------------------------------------------------------- //