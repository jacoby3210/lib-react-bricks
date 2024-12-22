import { mergeProps } from "react-aria";

// -------------------------------------------------------------------------- //
// A feature - to smartly merge default properties and passed properties.
// -------------------------------------------------------------------------- //

export const withMerge = (className, defaultProps = {}) => {
  const withMerge = (WrappedComponent) => {
    return (passedProps) => {
      const updateProps = mergeProps(
        { className, ...defaultProps },
        passedProps
      );
      return <WrappedComponent {...updateProps} />;
    };
  };

  Object.defineProperty(withMerge, "name", { value: "withMerge" });

  return withMerge;
};

// -------------------------------------------------------------------------- //
