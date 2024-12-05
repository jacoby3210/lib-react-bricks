// -------------------------------------------------------------------------- //
// A helper function to resolve additional css classes based on the first one.
// -------------------------------------------------------------------------- //

export const resolveClassName = (origin, suffix) => 
  `${origin.split(" ")[0]}-${suffix}`;

// -------------------------------------------------------------------------- //