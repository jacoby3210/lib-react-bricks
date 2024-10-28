// -------------------------------------------------------------------------- //
// Contains helper code that ensures the component's operation.
// -------------------------------------------------------------------------- //

// template for forming a gui by metadata.
export const TemplateDefault = props => {
  
	// initial data
  const {common, meta, index, ...attributes} = props;
	// const {cursorIndexState, ...props} = propsAll;

	// render 
	return (
		<option 
			{...attributes}
      className={`${common.className.split(" ")[0]}-option`} 
      cursor={common.cursorIndexState == index ? "true" : null}
			value={meta.caption}
		>
			{meta.caption}
		</option>
	)
};

// -------------------------------------------------------------------------- //