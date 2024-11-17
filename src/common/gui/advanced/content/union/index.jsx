import React, {useMemo} from 'react';

// -------------------------------------------------------------------------- //
// A feature - to transfer common properties to multiple components.
// -------------------------------------------------------------------------- //

export const withUnion = (...components) => (props) => {
  
  // initial data

  
  const {
    packages = [],
    ...commonProps
  } = props;
  const {value} = props;

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
    [value]
  );

  return (<>{children}</>);
};

// -------------------------------------------------------------------------- //