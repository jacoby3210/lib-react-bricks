import React, { useState, useEffect } from 'react';
import * as code from "./code"
// ------------------------------------------------------------------------- //
// HOC to control the state of the wrapped component.                        //
// ------------------------------------------------------------------------- //

export const withState = (stateName) => WrappedComponent => {

  return props => {

    // initial data
    const stateValue = props[stateName]; 
    const stateHandlerName = `when${code.capitalizeFirstLetter(stateName)}Change`;
    const stateInitial = props[stateName], stateHandler = props[stateHandlerName];
    const initialStateNormalize = typeof stateInitial === 'function'
      ? stateInitial(props)
      : stateInitial;

    // hooks
    const [state, setState] = useState(initialStateNormalize);
    const handleStateChange = (next) => {
      const v = stateHandler(next, stateValue)
      setState(prev => stateHandler(v, prev));
    }
    
    const handleStateModify = (next) => {
      const v = stateHandler(stateValue + next, stateValue)
      setState(prev => stateHandler(v, prev));
    }

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