import React, { memo, useMemo } from 'react';
// -------------------------------------------------------------------------- //
// A feature for creating a list of repeating components based on 
// a wrapped component and an array of source data.
// Supports the ability to output the result of applying a filter to the srс.
// -------------------------------------------------------------------------- //

export const withRepeat = (WrappedComponent) => {

  return (props) => {
  
    // initial data

    const { src = [], filter, ...attributes } = props;
    const [matchingItems, nonMatchingItems] = useMemo(() => {
      const matching = filter ? src.filter(filter, props) : src;
      const notMatching = src.filter((item) => !matching.includes(item));
      return [matching, notMatching];
    }, [filter, src, props]);
    
    // render

    const commonProps = { ...props, matchingItems, nonMatchingItems, }
    const componentList = useMemo(
      () =>
        matchingItems.map((item, index) => (
          <WrappedComponent
            key={item.id || index}
            common={commonProps}
            item={item}
            index={index}
          />
        )
      ),
      [matchingItems]
    );
      
    return (
      <>
      {componentList}
      </>
    );
  };
};

// -------------------------------------------------------------------------- //