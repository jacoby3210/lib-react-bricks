import {useMemo} from 'react';

// -------------------------------------------------------------------------- //
// A feature - to apply a filter to the source data.
// -------------------------------------------------------------------------- //

export const withFilter = (WrappedComponent) => (props) => {
  
    // unpack data
    
    const {filter = function(item){return true;}, ...rest} = props;
    const {src = [], value  = null } = props;

    // reduce props  

    const srcReduce = useMemo(() => {
      if (!src || typeof src !== 'object') {
        console.warn("Property `src` is not passed or has an incorrect format. An empty array is used.");
        return [];
      }
      return Array.isArray(src) ? src : Object.values(src);
    }, [src]);

    const [matchingItems, nonMatchingItems] = useMemo(() => {
      const matching = srcReduce.filter(filter, props);
      const notMatching = srcReduce.filter((item) => !matching.includes(item));
      return [matching, notMatching];
    }, [filter, srcReduce]);
    
    // render

    const updateProps = { ...rest, matchingItems, nonMatchingItems}
    return <WrappedComponent {...updateProps}/>;

};

// -------------------------------------------------------------------------- //