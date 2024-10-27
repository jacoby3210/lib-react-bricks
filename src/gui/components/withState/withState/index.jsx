import React, { useState, useCallback } from 'react';
// ------------------------------------------------------------------------- //
// HOC to control the state of the wrapped component.                        //
// ------------------------------------------------------------------------- //


export const withState = (stateName) => (WrappedComponent) => {
  return (props) => {

    // initial data
    const stateValue = props[stateName];
    const stateInitial = typeof stateValue === 'function' ? stateValue(props) : stateValue;
    const stateHandlerName = `when${stateName.charAt(0).toUpperCase() + stateName.slice(1)}Change`;
    const stateHandler = props[stateHandlerName];
    
    // hooks
    const [state, setState] = useState(stateInitial);

    // input handling
    const handleStateChange = useCallback(
      (next) => {
        const updatedValue = stateHandler ? stateHandler(next, state) : next;
        setState((prev) => (stateHandler ? stateHandler(updatedValue, prev) : updatedValue));
      },
      [stateHandler, stateValue]
    );

    const handleStateModify = useCallback(
      (delta) => {
        setState((prev) => {
          const newValue = prev + delta;
          return (stateHandler ? stateHandler(newValue, prev) : newValue)
        });
      },
      [stateHandler, stateValue]
    );

	  // render 
    const modifiedProps = {
      ...props,
      [stateName]: state,
      [stateHandlerName]: handleStateChange,
      [`when${stateName.charAt(0).toUpperCase() + stateName.slice(1)}Modify`]: handleStateModify,
    };

    return <WrappedComponent {...modifiedProps} />;
  };
};


// ------------------------------------------------------------------------- //