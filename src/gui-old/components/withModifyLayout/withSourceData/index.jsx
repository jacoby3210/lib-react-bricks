import React, { memo, useMemo } from 'react';
// -------------------------------------------------------------------------- //
// HOC to create children based on the data source (with filter applied).     //
// -------------------------------------------------------------------------- //

export const withSourceData = (WrappedComponent) => {
  return (props) => {
    // initial data
    const { src = [], filter, Template, ...attributes } = props;
    const [matchingItems, nonMatchingItems] = useMemo(() => {
      const matching = filter ? src.filter(filter, props) : src;
      const notMatching = src.filter((item) => !matching.includes(item));
      return [matching, notMatching];
    }, [filter, src, props]);

    // render
    const children = useMemo(
      () =>
        matchingItems.map((meta, index) => (
          <Template
            key={meta.id || index}
            common={attributes}
            index={index}
            meta={meta}
          />
        )),
      [matchingItems, Template]
    );

    return (
      <WrappedComponent {...props} 
        matchingItems={matchingItems} 
        nonMatchingItems={nonMatchingItems}
      >
        {children}
      </WrappedComponent>
    );
  };
};

// -------------------------------------------------------------------------- //