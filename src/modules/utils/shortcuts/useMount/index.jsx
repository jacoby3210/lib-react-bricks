import { useEffect } from "react";

// -------------------------------------------------------------------------- //
// A helper hook to handle mounting \ unmounting of components
// -------------------------------------------------------------------------- //

export const useMount = (setup) => useEffect(setup);

// -------------------------------------------------------------------------- //
