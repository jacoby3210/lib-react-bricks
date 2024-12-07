import {useMemo} from 'react';
import { resolveData } from '@lib-react-bricks/src/modules/core/utils';

// -------------------------------------------------------------------------- //
// A feature - to apply a filter to the source data.
// -------------------------------------------------------------------------- //

export const withFilter = (WrappedComponent) => (props) => {
  
    const {
      filter = function(item){return true;}, 
      ...rest
    } = props;
    
    const {data = []} = props;

    const dataResolve = useMemo(() => resolveData(data, rest),  [data]);

    const dataset = useMemo(
      () => dataResolve.filter(filter, props), 
      [filter, dataResolve, props]
    );
    
    // render

    const updateProps = { ...rest, dataset}
    return <WrappedComponent {...updateProps}/>;

};

// -------------------------------------------------------------------------- //