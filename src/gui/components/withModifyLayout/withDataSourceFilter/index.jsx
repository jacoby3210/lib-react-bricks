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
    const filterSourceData = src.filter(filter, {});
    const sendProps = {src:filterSourceData, ...attributes};
    return (<WrappedComponent {...sendProps}/>);
  };

};

export const withDataSourceFilter = (WrappedComponent) => withDataSourceFilterInternal(withDataSource(WrappedComponent));

// ------------------------------------------------------------------------- //