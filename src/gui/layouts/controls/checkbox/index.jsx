import { propValues, propTypes } from './config';

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
      console.log(attributes)
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

export const CheckBox = {Component, propValues};

// ------------------------------------------------------------------------- //