import React, { useState } from 'react';
import { withState } from '/src/gui/components/withState/withState';
// ------------------------------------------------------------------------- //
// HOC to control the state of the value in the wrapped component.           //
// ------------------------------------------------------------------------- //

export const withValue = (WrappedComponent) => withState("value")(WrappedComponent);

// ------------------------------------------------------------------------- //