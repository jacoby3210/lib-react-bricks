import React, { memo, useMemo } from 'react';

// -------------------------------------------------------------------------- //
// A feature - to apply a filter to the srс.
// -------------------------------------------------------------------------- //

export const withFilter = (WrappedComponent) => (props) => {
  
    // initial data
    
    const {
      filter = function(item){return true;},
      src = [], 
      value = null,
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

};

// -------------------------------------------------------------------------- //