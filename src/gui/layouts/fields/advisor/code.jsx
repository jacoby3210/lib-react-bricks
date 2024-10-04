// ------------------------------------------------------------------------- //
// Contains helper code that ensures the component's operation.
// ------------------------------------------------------------------------- //

// template for forming a gui by metadata.
export const TemplateDefault = props => {
  
	// initial data
  const {common, meta, ...attributes} = props;
	// const {cursorIndexState, ...props} = propsAll;

	// render 
	return (
		<option 
			{...attributes}
      className={`${common.className.split(" ")[0]}-option`} 
			value={meta.caption}
		>
			{meta.caption}
		</option>
	)
};

// ------------------------------------------------------------------------- //