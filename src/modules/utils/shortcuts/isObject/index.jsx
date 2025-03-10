// -------------------------------------------------------------------------- //
// A helper function to check if the variable is of array type.
// -------------------------------------------------------------------------- //

export const isObject = (x) => {
  return typeof x === "object" && !Array.isArray(x) && x !== null;
};

// -------------------------------------------------------------------------- //
