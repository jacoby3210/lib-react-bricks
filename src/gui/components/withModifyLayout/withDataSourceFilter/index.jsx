import {useState} from "react"
import { withDataSource } from "../withDataSource";
// ------------------------------------------------------------------------- //
// HOC to map multiple child nodes by filtered data source and JSX template. //
// ------------------------------------------------------------------------- //

 const withDataSourceFilterInternal = (WrappedComponent) => {

  return props => {

    // initial data
    const { filter, src, ...attributes } = props;

    // render
    const srcDataMatching = src.filter(filter, props);
    const srcDataNotMatching = src.filter(item => !srcDataMatching.includes(item));
    const sendProps = {
      src: srcDataMatching, 
      srcDataMatching, 
      srcDataNotMatching, 
      ...attributes
    };
    return (<WrappedComponent {...sendProps}/>);
  };

};

export const withDataSourceFilter = (WrappedComponent) => 
  withDataSourceFilterInternal(withDataSource(WrappedComponent));

// ------------------------------------------------------------------------- //