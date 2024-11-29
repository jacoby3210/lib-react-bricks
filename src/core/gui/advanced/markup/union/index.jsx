import {useMemo} from 'react';

// -------------------------------------------------------------------------- //
// A feature - to transfer common properties to multiple components.
// -------------------------------------------------------------------------- //


export const withUnion = (...components) => {

  const withUnion = (WrappedComponent) => {

    return (props) => {
  
      // initial data
      
      const {
        packages = [],
        ...commonProps
      } = props;

      const {value} = props;

      // render
      
      const childrenMemo = useMemo(
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
      
      return (
        <>
          {childrenMemo}
        </>
      );
    };
  };

  Object.defineProperty(withUnion, "name", { value: "withState" });
  return withUnion;
  
};

// -------------------------------------------------------------------------- //