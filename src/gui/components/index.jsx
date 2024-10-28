// -------------------------------------------------------------------------- //
// Basic functionality presented as HOCs.
// Designed for use in conjunction with layouts.
// -------------------------------------------------------------------------- //

// withModifyLayout - modifies html layout
export { withContainer }            from "./withModifyLayout/withContainer"       // - to wrap base component into ui block (<div>).
export {withDataSourceCursor}       from "./withModifyLayout/withDataSourceCursor";     //
export {withPopup}                  from "./withModifyLayout/withPopup";          // - to display child components outside of the main document flow.
export {withSourceData}             from "./withModifyLayout/withSourceData"      // - to create children based on the data source (with filter applied).

// withModifyProperties - modifies value handlers 
export {withMergeProps}             from "./withModifyProps/withMergeProps";      // - to smartly merge the component's default and passed properties.
export { withState }                from "./withModifyProps/withState";           // - to control the state of the wrapped component.

// withValue - 
export {withValueHandleBase}        from "./withValue/withValueHandleBase";       // - to handle a change in the value of a component.
export {withValueHandleNumber}      from "./withValue/withValueHandleNumber";     // - to handle a change in the value of a component (numeric type).
export {withValueHandleSourceItem}  from "./withValue/withValueHandleSourceItem"  // - to handle a change in the value of a component (source option type).

// -------------------------------------------------------------------------- //