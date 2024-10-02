// ------------------------------------------------------------------------- //
// Contains helper code that ensures the component's operation.
// ------------------------------------------------------------------------- //

export const DropdownButton = props => {
  const cssPrefix = `${props.type}-button`; 
  props.type
	return (
		<button className={cssPrefix} {...props}>
			<span className={`${cssPrefix}-caption`}>{props?.caption}</span>
			<span className={`${cssPrefix}-arrow`}>
				<i className={'fa-solid fa-chevron-down'}></i>
			</span>
			<span className={`${cssPrefix}-caption`}/>
		</button>
	);
}

// ------------------------------------------------------------------------- //