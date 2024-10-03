// ------------------------------------------------------------------------- //
// Helper functions.                                                         //
// ------------------------------------------------------------------------- //

// get the number of digits after the decimal point
export const getDecimalPlaces = (num) => {
  const str = num.toString(), index = str.indexOf('.');
  return index >= 0 ? str.length - index - 1 : 0;
}

// ------------------------------------------------------------------------- //