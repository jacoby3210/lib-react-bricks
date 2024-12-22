// -------------------------------------------------------------------------- //
// Helper functions.
// -------------------------------------------------------------------------- //

export const getCandidate = (state, action) => {
  const { next } = action.payload;

  switch (action.type) {
    case "CHANGE":
      return next;
      break;

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const normalize = (next, prev, { max, min, pattern }) => {
  if (next.length < min || next.length > max) return prev;
  const patternExp = new RegExp(
    `[${pattern.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")}]`
  );
  return patternExp.test(next) ? prev : next;
};

// -------------------------------------------------------------------------- //
