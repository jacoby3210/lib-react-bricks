import React, { useMemo } from 'react';
import { withDataSource } from "../withDataSource";
// ------------------------------------------------------------------------- //
// HOC to map multiple child nodes by filtered data source and JSX template. //
// ------------------------------------------------------------------------- //

const withDataSourceFilterInternal = (WrappedComponent) => {
  return (props) => {

    // initial data
    const { filter, src = [], ...attributes } = props;
    const [matchingItems, nonMatchingItems] = useMemo(() => {
      const matching = src.filter(filter, props);
      const notMatching = src.filter(item => !matching.includes(item));
      return [matching, notMatching];
    }, [filter, src, props]);

    // render
    const sendProps = {
      src: matchingItems,
      matchingItems,
      nonMatchingItems,
      ...props,
    };

    return <WrappedComponent {...sendProps} />;
  };
};

export const withDataSourceFilter = (WrappedComponent) => 
  withDataSourceFilterInternal(withDataSource(WrappedComponent));


// ------------------------------------------------------------------------- //
