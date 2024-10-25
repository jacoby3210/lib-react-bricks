// ------------------------------------------------------------------------- //
// Contains helper code that ensures the component's operation.
// ------------------------------------------------------------------------- //

// get the number of digits after the decimal point
export const getDecimalPlaces = (num) => {
  const str = num.toString(), index = str.indexOf('.');
  return index >= 0 ? str.length - index - 1 : 0;
}

// 
export function capitalizeFirstLetter(string) {
  if (!string) return ''; 
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// ------------------------------------------------------------------------- //