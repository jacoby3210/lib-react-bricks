// -------------------------------------------------------------------------- //
// Helper functions.
// -------------------------------------------------------------------------- //

export const getCandidate = (state, action) => {
  const { max, min, step, value } = state;
  const { next, modifier } = action.payload;

  switch (action.type) {
    case "CHANGE":
      return next;
      break;

    case "INVERT":
    case "TOGGLE":
      return -value;
      break;

    case "MODIFY":
      return value + (modifier || step);
      break;

    case "RELATIVE":
      return min + Math.round((next * (max - min)) / step) * step;
      break;

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const getDecimalPlaces = (num) => {
  const decimalPart = num.toString().split(".")[1];
  return decimalPart ? decimalPart.length : 0;
};

export const normalize = (next, prev, { max, min, modular, step }) => {
  const wrappedValue = modular
    ? (next + max) % max
    : Math.max(Math.min(next, max), min);
  const steppedValue = Math.round(wrappedValue / step) * step;
  return parseFloat(steppedValue.toFixed(getDecimalPlaces(step)));
};

// -------------------------------------------------------------------------- //
