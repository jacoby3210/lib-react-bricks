import { createContext, useContextSelector } from "use-context-selector";

// -------------------------------------------------------------------------- //
// A helper function to simplify context creation.
// -------------------------------------------------------------------------- //

export const createSmartContext = (name) => {
  const Context = createContext();

  const useContextValue = (selector = (ctx) => ctx) => {
    const contextName = Context.displayName || "Context";

    try {
      const context = useContextSelector(Context, selector);

      if (context == null) {
        throw new Error(
          `use${contextName} must be used within a ${contextName}Provider. ` +
            `Ensure that the component is wrapped with <${contextName}Provider>.`
        );
      }

      return context;
    } catch (error) {
      throw new Error(
        `An error occurred in the selector function for use${contextName}: ${error.message}`
      );
    }
  };

  return {
    [`${name}Context`]: Context,
    [`use${name}`]: useContextValue,
  };
};

// -------------------------------------------------------------------------- //
