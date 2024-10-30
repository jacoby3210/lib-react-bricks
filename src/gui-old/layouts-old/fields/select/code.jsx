// -------------------------------------------------------------------------- //
// Contains helper code that ensures the component's operation.
// -------------------------------------------------------------------------- //

// template for forming a gui by metadata.
export const TemplateDefault = receivedProps => {          
  const {common, meta} = receivedProps;
  const {className, whenValueChange, whenValueModify, ...attributes} = common;
  return (
    <option 
      {...attributes}
      className={`${className.split(" ")[0]}-option`} 
      onMouseDown={meta?.onMouseDown} 
      value={meta?.value}
    >
      {meta.caption}
    </option>
  );
}

// -------------------------------------------------------------------------- //