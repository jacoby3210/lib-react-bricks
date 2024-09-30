import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ------------------------------------------------------------------------- //
// Helper functions.																												 //
// ------------------------------------------------------------------------- //

export const DropdownButton = receivedProps => {
	return (
		<button className={`${DEFAULT_CLASS}-button`} onClick={receivedProps?.onClick}>
			<span className={`${DEFAULT_CLASS}-button-caption`}>
				{receivedProps?.caption}
			</span>
			<span className={`${DEFAULT_CLASS}-button-arrow`}>
				<i className={'fa-solid fa-chevron-down'}></i>
			</span>
			<span className={`${DEFAULT_CLASS}-button-caption`}/>
		</button>
	);
}

// ------------------------------------------------------------------------- //