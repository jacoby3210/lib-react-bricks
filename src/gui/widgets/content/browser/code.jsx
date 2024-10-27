// ------------------------------------------------------------------------- //
// Contains helper code that ensures the component's operation.
// ------------------------------------------------------------------------- //

// template for forming a gui by metadata.
export const TemplateDefault = ({common, meta, index}) =>{
  return <button 
    className= {`rc-browser-button`} 
    onClick= {()=> common.whenValueChange(index * common.valueStep)}
    {...meta}
  >
    {meta?.caption || trueIndex}
  </button>;
}

// ------------------------------------------------------------------------- //