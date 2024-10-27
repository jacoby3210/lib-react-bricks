// -------------------------------------------------------------------------- //
// Basic functionality presented as HOCs.
// Designed for use in conjunction with layouts.
// -------------------------------------------------------------------------- //

// withModifyLayout - modifies html layout
export { withContainer }            from "./withModifyLayout/withContainer"             // - to wrap base component into ui block (<div>).
export { withDataSource }           from "./withModifyLayout/withDataSource"            // - to map multiple child nodes by data source and JSX template.
export {withDataSourceCursor}       from "./withModifyLayout/withDataSourceCursor";     //
export {withDataSourceFilter}       from "./withModifyLayout/withDataSourceFilter";     // - to map multiple child nodes by filtered data source and JSX template.
export {withPopup}                  from "./withModifyLayout/withPopup";                // - to display child components outside of the main document flow.

// withProperties - modifies value handlers 
export {withMergeProps}             from "./withModifyProps/withMergeProps";            // - to smartly merge the component's default and passed properties.
export {withValueHandleBase}        from "./withModifyProps/withValueHandleBase";       // - to handle a change in the value of a component.
export {withValueHandleNumber}      from "./withModifyProps/withValueHandleNumber";     // - to handle a change in the value of a component (numeric type).
export {withValueHandleSourceItem}  from "./withModifyProps/withValueHandleSourceItem"  //

// withState - controls state 
export { withState }                from "./withState/withState";                       // - to control the state of the wrapped component.

// -------------------------------------------------------------------------- //