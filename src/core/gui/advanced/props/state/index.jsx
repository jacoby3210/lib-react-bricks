import React, { useState, useCallback } from 'react';

// -------------------------------------------------------------------------- //
// A feature - to create a managed state of the wrapped component.
// -------------------------------------------------------------------------- //

export const withState = (stateName) => {
  const withState = (WrappedComponent) => {
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
        (next, validate = (next, prev) => next) => {
          setState((prev) => {
            const validateValue = validate(next, prev);
            return (stateHandler ? stateHandler(validateValue, prev) : validateValue);
          })
        },
        [stateHandler, stateValue]
      );

      const handleStateModify = useCallback(
        (delta, validate) => {
          setState((prev) => {
            const newValue = prev + delta;
            return (stateHandler ? stateHandler(newValue, prev) : newValue)
          });
        },
        [stateHandler, stateValue]
      );

      // render 

      const updateProps = {
        ...props,
        [stateName]: state,
        [stateHandlerName]: handleStateChange,
        [`when${stateName.charAt(0).toUpperCase() + stateName.slice(1)}Modify`]: handleStateModify,
      };

      return <WrappedComponent {...updateProps} />;
      
    };
  };

  Object.defineProperty(withState, "name", { value: "withState" });
  return withState;
};


// -------------------------------------------------------------------------- //