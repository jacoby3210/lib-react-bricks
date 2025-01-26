import { resolveCallback } from "../callback";
// -------------------------------------------------------------------------- //
// A helper function to resolve the property data to a set of properties.
// -------------------------------------------------------------------------- //

export const resolveData = (property, rest) => {
  const result = resolveCallback(property, rest);
  if (!result || typeof result !== "object") {
    console.warn(
      "Property `src` is not passed or has an incorrect format. An empty array is used."
    );
    return [];
  }

  return Array.isArray(result) ? result : Object.values(result);
};

// -------------------------------------------------------------------------- //
