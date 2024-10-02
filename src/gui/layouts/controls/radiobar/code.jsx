// ------------------------------------------------------------------------- //
// place the code here for in-depth development.														 //
// ------------------------------------------------------------------------- //

export const TemplateDefault = (props) => {

	const {common, index, meta} = props;
  const {className, ...attributes} = common;
	const handleChange = (e) => common.whenValueChange(e.target.value);

  return (
    <label 
      className={`${className.split(" ")[0]}-option`} 
      key={index}
    >
      <input
        className={`${common.type}-input`}
        checked={meta.value == common.value}
        name={common.name}
        type="radio"
        value={meta.value}
        onChange={handleChange}
      />
      {meta.label}
    </label>
  );
}

// ------------------------------------------------------------------------- //