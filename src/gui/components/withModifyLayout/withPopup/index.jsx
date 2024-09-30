import React, { useCallback, useEffect, useRef, useState } from 'react';
// ------------------------------------------------------------------------- //
// HOC to display child components outside of the main document flow. 
// ------------------------------------------------------------------------- //

export const withPopup = (WrappedComponent) => {

  return props => {
	
		// initial data
		const {parentRef, shown} = props;

		// hooks
    const [shownState, setShownState] = useState(shown);

		// inputs
    const handleClickOutside = useCallback((event) => {
			if (!parentRef?.current.contains(event.target)) {
				setShownState(false);
			}
		}, []);

		// hooks
		useEffect(() => {
			if (shownState) {
				document.addEventListener('mousedown', handleClickOutside);
			} else {
				document.removeEventListener('mousedown', handleClickOutside);
			}
			return () => {document.removeEventListener('mousedown', handleClickOutside);};
		}, [shownState, handleClickOutside]);

		// render
		const wrapProps = {shownState, setShownState, ...props}
		return (<WrappedComponent {...wrapProps} />);
	}
}
// ------------------------------------------------------------------------- //