// -------------------------------------------------------------------------- //
// A helper function to resolve the property data to a set of properties.
// -------------------------------------------------------------------------- //

export const resolveData = (data) => {
  if (!data || typeof data !== "object") {
    console.warn(
      "Property `src` is not passed or has an incorrect format. An empty array is used."
    );
    return [];
  }

  return Array.isArray(data) ? data : Object.values(data);
};

// -------------------------------------------------------------------------- //
