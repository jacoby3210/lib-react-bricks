// ------------------------------------------------------------------------- //
// Contains helper code that ensures the component's operation.
// ------------------------------------------------------------------------- //

// template for forming a gui by metadata.
export const TemplateSelectOptionDefault = receivedProps => {					
  const {common, meta, ...attributes} = receivedProps;
  return (
    <option 
      {...attributes}
      className={`${common.classNameDefault}-option`} 
      onMouseDown={meta?.onMouseDown} 
      value={meta?.value}
      {...attributes}
    >
      {meta.caption}
    </option>
  );
}

// ------------------------------------------------------------------------- //