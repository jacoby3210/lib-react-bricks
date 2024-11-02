import React, { memo, useMemo } from 'react';

// -------------------------------------------------------------------------- //
// A feature to create a list of recurring components,
// based on wrapped component and an array of source data.
// Supports the ability to output the result of applying a filter to the srс.
// -------------------------------------------------------------------------- //

export const withRepeat = (TemplateComponent, WrappedComponent = null) => {

  return (props) => {
  
    // initial data

    const { src = [], filter, ...attributes } = props;
    const [matchingItems, nonMatchingItems] = useMemo(() => {
      const matching = filter ? src.filter(filter, props) : src;
      const notMatching = src.filter((item) => !matching.includes(item));
      return [matching, notMatching];
    }, [filter, src, props]);
    
    // render

    const updateProps = { ...props, matchingItems, nonMatchingItems, }
    const componentList = useMemo(
      () =>
        matchingItems.map((item, index) => (
          <TemplateComponent
            key={item.id || index}
            common={updateProps}
            item={item}
            index={index}
          />
        )
      ),
      [matchingItems]
    );
      
    return WrappedComponent 
      ? (<WrappedComponent {...updateProps}>{componentList}</WrappedComponent>)
      : (<>{componentList}</>)
    ;
  };
};

// -------------------------------------------------------------------------- //