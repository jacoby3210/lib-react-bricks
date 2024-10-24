// ------------------------------------------------------------------------- //
// Contains helper code that ensures the component's operation.
// ------------------------------------------------------------------------- //

// template for forming a gui by metadata.
export const TemplateDefault = ({common, meta, index}) =>
  <button className= {`rc-browser-button`} onClick= {()=> common.whenValueChange(meta.id)}
    {...meta}
  >
    {meta?.caption || trueIndex}
  </button>;

// ------------------------------------------------------------------------- //