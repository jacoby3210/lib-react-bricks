import { useMemo } from "react";

// -------------------------------------------------------------------------- //
// A feature - to transfer common properties to multiple components.
// -------------------------------------------------------------------------- //

export const withUnion = (...components) => {
  const withUnion = (WrappedComponent) => {
    return (props) => {
      const { packages = [], ...common } = props;

      const { value } = common;

      const childrenMemo = useMemo(
        () =>
          Object.values(components).map((Component, index) => (
            <Component key={index} {...common} {...packages[index]} />
          )),
        [value]
      );

      return <>{childrenMemo}</>;
    };
  };

  Object.defineProperty(withUnion, "name", { value: "withState" });
  return withUnion;
};

// -------------------------------------------------------------------------- //
