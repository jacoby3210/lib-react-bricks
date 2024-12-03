import {useMemo} from 'react';

// -------------------------------------------------------------------------- //
// A feature - to apply a filter to the source data.
// -------------------------------------------------------------------------- //

export const withFilter = (WrappedComponent) => (props) => {
  
    const {
      filter = function(item){return true;}, 
      ...rest
    } = props;
    
    const {src = []} = props;

    const resolveSrc = useMemo(() => {
      if (!src || typeof src !== 'object') {
        console.warn("Property `src` is not passed or has an incorrect format. An empty array is used.");
        return [];
      }
      return Array.isArray(src) ? src : Object.values(src);
    }, [src]);

    const [matchingItems, nonMatchingItems] = useMemo(() => {
      const matching = resolveSrc.filter(filter, props);
      const notMatching = resolveSrc.filter((item) => !matching.includes(item));
      return [matching, notMatching];
    }, [filter, resolveSrc]);
    
    // render

    const updateProps = { ...rest, matchingItems, nonMatchingItems}
    return <WrappedComponent {...updateProps}/>;

};

// -------------------------------------------------------------------------- //