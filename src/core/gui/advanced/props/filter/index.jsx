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
    
    const srcMemo = useMemo(
      () => Array.isArray(src) ? src : Object.values(src),
      [src]
    )

    const [matchingItems, nonMatchingItems] = useMemo(() => {
      const matching = filter ? srcMemo.filter(filter, props) : srcMemo;
      const notMatching = srcMemo.filter((item) => !matching.includes(item));
      return [matching, notMatching];
    }, [filter, srcMemo, value]);
    
    // render

    const updateProps = { ...props, matchingItems, nonMatchingItems}
    return <WrappedComponent {...updateProps}/>;

};

// -------------------------------------------------------------------------- //