// -------------------------------------------------------------------------- //
// Contains helper code that ensures the component's operation.
// -------------------------------------------------------------------------- //

// template for forming a gui by metadata.
export const TemplateDefault = ({common, meta, index}) => 
  (
    <details open={common.value.includes(index)}>
      <summary onClick={(evt) => handleToggle(evt, index)} >
        {meta.caption}
      </summary>
      <p>{meta.content}</p>
    </details>
  );

// -------------------------------------------------------------------------- //