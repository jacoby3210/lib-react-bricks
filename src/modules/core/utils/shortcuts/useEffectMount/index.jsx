import { useEffect } from "react";

// -------------------------------------------------------------------------- //
// A helper hook to handle mounting \ unmounting of components
// -------------------------------------------------------------------------- //

export const useEffectMount = (reducer) => useEffect(reducer);

// -------------------------------------------------------------------------- //
