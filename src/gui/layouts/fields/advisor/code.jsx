// -------------------------------------------------------------------------- //
// Contains helper code that ensures the component's operation.
// -------------------------------------------------------------------------- //

// template for forming a gui by metadata.
export const TemplateDefault = (props) => {
  
	// initial data

  const {common, item, index} = props;

	// render 
	
  return (
		<option 
      className={`${common.className.split(" ")[0]}-option`} 
      cursor={common.cursorIndexState == index ? "true" : null}
			value={item.caption}
		>
			{item.caption}
		</option>
	)
};

// filter src data by default.
export function filter(item) {
  return item.caption != this.value && item.caption.includes(this.value);
}

// -------------------------------------------------------------------------- //