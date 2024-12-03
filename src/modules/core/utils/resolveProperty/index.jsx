
// -------------------------------------------------------------------------- //
// A helper function to resolve the property to a summary value.
// -------------------------------------------------------------------------- //

export const resolveProperty = (property, rest) => {
  const rs = (typeof property === 'function') ? property(rest) : property;
  return rs;
};

// -------------------------------------------------------------------------- //