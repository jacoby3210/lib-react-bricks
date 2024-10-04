import React, { useEffect, useRef, useState } from 'react';
import * as cfg from "./config"
// ------------------------------------------------------------------------- //
// React component to show text line field with autocomplete suggestions.
// ------------------------------------------------------------------------- //

export const Component = props => {
	// initial data
	const {
		id,
    children,
		src, Template,
		value, whenValueChange, whenValueModify,
    shownState, setShownState,
		...attributes
	} = props;

	// hooks
	const inputRef = useRef(null);
	const [cursorIndexState, setCursorIndexState] = useState(0);
	const [valueState, setValueState] = useState(value);
	useEffect(() => {setValueState(value);}, [value]);

	// input from user
	const handleInputSubmit = (next) => {
    whenValueChange(next)
	}

	const handleChange = (evt) => {
		handleInputSubmit(evt.target.value);
	}
	
	const handleFocus = (evt) => {
		// setCursorIndexState(0); 
		setShownState(true);
	}

	const handleKeyDown = (evt) => {
		// if (evt.key === 'ArrowDown') {
		// 	setCursorIndexState(prev => prev < src.length - 1 ? prev + 1 : prev);
		// } else if (evt.key === 'ArrowUp') {
		// 	setCursorIndexState(prev => prev > 0 ? prevIndex - 1 : prev);
		// } else if (evt.key === 'Enter' && cursorIndexState >= 0) {
		// 	handleInputSubmit(src[cursorIndexState]?.caption);
		// 	setShownState(false);
		// }
	};

	const handleAdvisorOptionClick = (evt) => {
		// handleInputSubmit(evt.currentTarget.value);
		// setShownState(false);
	}

	// render 
	const inputProps = {
		// className: `${cfg.CSS_CLASS_DEFAULT}-input`,
		onChange: handleChange,
		// onKeyDown: handleKeyDown,
		value: valueState
	};

	// const popupProps = {
	// 	shown: shownState,
	// 	whenUpdateShownState: setShownState,
	// };

	// const advisorListProps = {
	// 	src, 
	// 	TemplateAdvisorOption, 
	// 	templateAdvisorOptionProps: {
	// 		className: `${cfg.CSS_DEFAULT_CLASS}-list-option`,
	// 		onClick: handleAdvisorOptionClick,
	// 		cursorIndexState,
	// 	}, 
	// 	valueState
	// } 

	return (
		<>
      {
        shownState 
        ? <>
            <input autoFocus ref={inputRef} {...inputProps} />
            <div>
              {children}
            </div>
          </> 
        : <input onFocus={handleFocus} {...inputProps} />
      }
    </>	
  );
};

Component.propTypes = cfg.propTypes;
export const Advisor = {cfg, Component}

// ------------------------------------------------------------------------- //