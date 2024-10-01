import {CSS_CLASS_DEFAULT, propValues, propTypes } from "./config"
// ------------------------------------------------------------------------- //
// Helper functions.																												 //
// ------------------------------------------------------------------------- //

export const DropdownButton = props => {
  const cssPrefix = `${props.classNameDefault}-button`; 
  props.classNameDefault
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