// -------------------------------------------------------------------------- //
// Template - to output multiple radio buttons as a single component.  
// -------------------------------------------------------------------------- //

const Template = (props) => {

  // initial data
  
  const {common, index, item} = props;
  const {className, ...attributes} = common;

  // input handling

  const handleChange = (e) => common.whenValueChange(e.target.value);

  // render

  return (
    <label 
      className={`${className.split(" ")[0]}-option`} 
      key={index}
    >
      <input
        className={`${common.type}-input`}
        checked={item.value == common.value}
        name={common.name}
        type="radio"
        value={item.value}
        onChange={handleChange}
      />
      {item.label}
    </label>
  );
}

export const Bar = {Template};

// -------------------------------------------------------------------------- //