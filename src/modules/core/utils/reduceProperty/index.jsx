
// -------------------------------------------------------------------------- //
// A helper function to reduce the property to a summary value.
// -------------------------------------------------------------------------- //

export const reduceProperty = (property, validator) => {
  const rs = (typeof property === 'function') ? property(rest) : property;
  return rs;
};

// -------------------------------------------------------------------------- //