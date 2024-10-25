// ------------------------------------------------------------------------- //
// Contains helper code that ensures the component's operation.
// ------------------------------------------------------------------------- //

// template for forming a gui by metadata.
export const TemplateDefault = ({common, meta, index}) =>{
  // console.log(common)
  return <button className= {`rc-browser-button`} onClick= {()=> common.whenValueChange(meta.id * common.valueStep)}
    {...meta}
  >
    {meta?.caption || trueIndex}
  </button>;
}

// ------------------------------------------------------------------------- //