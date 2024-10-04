import {useState} from "react"
import { withDataSource } from "../withDataSource";
// ------------------------------------------------------------------------- //
// HOC to map multiple child nodes by filtered data source and JSX template. //
// ------------------------------------------------------------------------- //

 const withDataSourceFilterInternal = (WrappedComponent) => {

  return props => {

    // initial data
    const {value} = props;
    const {
      filter = (item) => item.caption != value && item.caption.includes(value),
      src,
      ...attributes
    } = props;

    // render
    const filterSourceData = src.filter(filter);
    const sendProps = {src:filterSourceData, ...attributes};
    return (<WrappedComponent {...sendProps}/>);
  };
};

export const withDataSourceFilter = (WrappedComponent) => withDataSourceFilterInternal(withDataSource(WrappedComponent));

// ------------------------------------------------------------------------- //