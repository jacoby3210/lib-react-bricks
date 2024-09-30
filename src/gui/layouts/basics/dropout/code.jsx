import {CSS_CLASS_DEFAULT, propValues, propTypes } from "./config"
// ------------------------------------------------------------------------- //
// Helper functions.																												 //
// ------------------------------------------------------------------------- //

export const DropdownButton = receivedProps => {
	return (
		<button className={`${CSS_CLASS_DEFAULT}-button`} onClick={receivedProps?.onClick}>
			<span className={`${CSS_CLASS_DEFAULT}-button-caption`}>
				{receivedProps?.caption}
			</span>
			<span className={`${CSS_CLASS_DEFAULT}-button-arrow`}>
				<i className={'fa-solid fa-chevron-down'}></i>
			</span>
			<span className={`${CSS_CLASS_DEFAULT}-button-caption`}/>
		</button>
	);
}

// ------------------------------------------------------------------------- //