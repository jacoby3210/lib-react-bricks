import React, { memo, useMemo } from 'react';

// -------------------------------------------------------------------------- //
// A feature - to create a list of recurring items,
// based on wrapped component and an array of source data.
// Supports the ability to output the result of applying a filter to the srс.
// -------------------------------------------------------------------------- //

export const withRepeat = (TemplateComponent, WrappedComponent = null) => {

  return (props) => {
  
    // initial data

    const {
      first = 0, 
      length = 0, 
      src = [], 
      filter = function(item){return true;},
    } = props;
    
    const srcArray = Array.isArray(src) ? src : Object.values(src);

    const [matchingItems, nonMatchingItems] = useMemo(() => {
      const matching = filter ? srcArray.filter(filter, props) : srcArray;
      const notMatching = srcArray.filter((item) => !matching.includes(item));
      return [matching, notMatching];
    }, [filter, srcArray]);
    
    // render

    const updateProps = { ...props, matchingItems, nonMatchingItems}
    const componentList = useMemo(
      () =>
        matchingItems
          .slice(first, first + (length ? length : matchingItems.length ))
          .map((item, index) => (
            <TemplateComponent
              key={item.id || index}
              common={updateProps}
              item={item}
              index={index}
            />
        )
      ),
      [matchingItems, first, length]
    );
      
    return WrappedComponent 
      ? (<WrappedComponent {...updateProps}>{componentList}</WrappedComponent>)
      : (<>{componentList}</>)
    ;
  };
};

// -------------------------------------------------------------------------- //