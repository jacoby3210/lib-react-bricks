import * as cfg from "./config"
// ------------------------------------------------------------------------- //
// React Component wrapping around the classic checkbox for simplicity.
// ------------------------------------------------------------------------- //

const Component = props => {

	// initial data
	const {
		id,
    children,
		value,
		whenValueChange,
		whenValueModify,
		...attributes
	} = props;

  // handlers
  const handleChange = () => whenValueChange(!value, value);

  // render 
	return (
		<input 
      checked={value} 
      type="checkbox" 
			value={value}
      onChange={handleChange} 
      {...attributes}
    />
	);
};

Component.propTypes = cfg.propTypes;
export const CheckBox = {cfg, Component};

// ------------------------------------------------------------------------- //