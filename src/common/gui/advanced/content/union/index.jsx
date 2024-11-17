import React from 'react';

// -------------------------------------------------------------------------- //
// A feature - to transfer common properties to multiple components.
// -------------------------------------------------------------------------- //

export const withUnion = (...components) => (props) => {
  
  // initial data

  
  const {
    packages = [],
    ...commonProps
  } = props;

  // render
  
  const children = useMemo(
    () =>
      Object.values(components).map(
        (Component, index) => (
          <Component
            key={index}
            {...commonProps}
            {...packages[index]}
          />
      )
    ),
    []
  );

  return (<>{children}</>);
};

// -------------------------------------------------------------------------- //