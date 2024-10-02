// ------------------------------------------------------------------------- //
// place the code here for in-depth development.														 //
// ------------------------------------------------------------------------- //

export const RadioBarTemplate = (props) => {

	const {index, meta, common, ...attributes} = props;
	const handleChange = (e) => common.whenValueChange(e.target.value);

  return (<label className={`${common.type}-option`} key={index}>
		<input
			className={`${common.type}-input`}
			checked={meta.value == common.value}
			name={common.name}
			type="radio"
			value={meta.value}
			onChange={handleChange}
			{...attributes}
		/>
		{meta.label}
	</label>);
}

// ------------------------------------------------------------------------- //