import React, { useState } from 'react';
import * as code from "./code"
// ------------------------------------------------------------------------- //
// HOC to control the state of the wrapped component.                        //
// ------------------------------------------------------------------------- //

export const withState = (stateName) => WrappedComponent => {

  return props => {

    // initial data
    const stateHandlerName = `when${code.capitalizeFirstLetter(stateName)}Change`;
    const stateInitial = props[stateName], stateHandler = props[stateHandlerName];
    const initialStateNormalize = typeof stateInitial === 'function'
      ? stateInitial(props)
      : stateInitial;

    // hooks
    const [state, setState] = useState(initialStateNormalize);
    const handleStateChange = (next) => setState(prev => stateHandler(next, prev));
    const handleStateModify = (next) => setState(prev => stateHandler(prev + next, prev));

    // render
    const modifiedProps = {
      ... props,
      [stateName]: state,
      [stateHandlerName]: handleStateChange,
      [stateHandlerName.replace("Change", "Modify")]: handleStateModify,
    };

    return <WrappedComponent {...modifiedProps}/>;
  }
}

// ------------------------------------------------------------------------- //