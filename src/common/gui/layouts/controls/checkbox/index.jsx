// -------------------------------------------------------------------------- //
// Layout - to provides an advanced version of the classic checkbox.
// -------------------------------------------------------------------------- //

export const CheckBox = props => {

  // initial data

  const {
    id,
    className,
    children,
    onChange = (evt) => {},
    value,
    whenValueChange,
    whenValueModify,
    ...attributes
  } = props;

  // input handling

  const handleChange = (evt) => {
    onChange(evt),
    whenValueChange(!value, value);
  }

  // render 

  return (
    <input 
      className={className}
      checked={value} 
      type="checkbox" 
      value={value}
      onChange={handleChange} 
    />
  );
};

// -------------------------------------------------------------------------- //