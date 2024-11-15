import React, { memo, useMemo } from 'react';

// -------------------------------------------------------------------------- //
// A feature - to create a list of recurring items,
// based on wrapped component and an array of source data.
// Supports the ability to output the result of applying a filter to the srс.
// -------------------------------------------------------------------------- //

export const withFilter = (WrappedComponent) => {

  // initial data
  return (props) => {

    const {
      src = [], 
      filter = function(item){return true;},
      value,
    } = props;
    
    const srcArray = Array.isArray(src) ? src : Object.values(src);

    const [matchingItems, nonMatchingItems] = useMemo(() => {
      const matching = filter ? srcArray.filter(filter, props) : srcArray;
      const notMatching = srcArray.filter((item) => !matching.includes(item));
      return [matching, notMatching];
    }, [filter, srcArray, value]);
    
    // render

    const updateProps = { ...props, matchingItems, nonMatchingItems}
    return <WrappedComponent {...updateProps}/>;
  }
};

// -------------------------------------------------------------------------- //