import {useMemo} from 'react';

// -------------------------------------------------------------------------- //
// A feature - to apply a filter to the source data.
// -------------------------------------------------------------------------- //

export const withFilter = (WrappedComponent) => (props) => {
  
    const {
      filter = function(item){return true;}, 
      ...rest
    } = props;
    
    const {data = []} = props;

    const dataResolve = useMemo(() => {
      if (!data || typeof data !== 'object') {
        console.warn("Property `src` is not passed or has an incorrect format. An empty array is used.");
        return [];
      }
      return Array.isArray(data) ? data : Object.values(src);
    }, [data]);

    const dataset = useMemo(
      () => dataResolve.filter(filter, props), 
      [filter, dataResolve, props]
    );
    
    // render

    const updateProps = { ...rest, dataset}
    return <WrappedComponent {...updateProps}/>;

};

// -------------------------------------------------------------------------- //