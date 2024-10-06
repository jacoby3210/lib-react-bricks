// ------------------------------------------------------------------------- //
// Contains helper code that ensures the component's operation.
// ------------------------------------------------------------------------- //

//
export function capitalizeFirstLetter(string) {
  if (!string) return ''; 
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// ------------------------------------------------------------------------- //