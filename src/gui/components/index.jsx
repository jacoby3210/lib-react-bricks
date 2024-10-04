// -------------------------------------------------------------------------- //
// Basic functionality presented as HOCs.
// Designed for use in conjunction with layouts.
// -------------------------------------------------------------------------- //

// withModifyLayout - modifies html layout
export { withContainer }       from "./withModifyLayout/withContainer"        // - to wrap base component into ui block (<div>).
export { withDataSource }      from "./withModifyLayout/withDataSource"       // - to map multiple child nodes by data source and JSX template.
export {withDataSourceFilter}  from "./withModifyLayout/withDataSourceFilter";// - to map multiple child nodes by filtered data source and JSX template.
export {withPopup}             from "./withModifyLayout/withPopup";           // - to display child components outside of the main document flow.

// withProperties - modifies 
export { withMergeProps }      from "./withModifyProperties/withMergeProps";  // - to smartly merge the component's default and passed properties.

// withState - modifies 
export { withValue }           from "./withState/withValue";                  // - to control the state of the value in the wrapped component.
export { withValueNumber }     from "./withState/withValueNumber";            // - to control the state of the value (number) in the wrapped component.

// -------------------------------------------------------------------------- //