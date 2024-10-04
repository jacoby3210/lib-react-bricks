import {useState} from "react"
// ------------------------------------------------------------------------- //
// HOC to map multiple child nodes by filtered data source and JSX template. //
// ------------------------------------------------------------------------- //

export const withDataSourceCursor = (WrappedComponent) => {

  return props => {

    // initial data
    const {
      src,
      whenValueChange,
      ...attributes
    } = props;

	  // hooks
    const [cursorIndexState, setCursorIndexState] = useState(0);

	  // input from user
    const handleValueChange = (next) => whenValueChange(next);
  
    const handleChange = (evt) => handleValueChange(evt.target.value);
    const handleKeyDown = (evt) => {
      if (evt.key === 'ArrowDown') {
      	setCursorIndexState(prev => prev < src.length - 1 ? prev + 1 : prev);
      } else if (evt.key === 'ArrowUp') {
      	setCursorIndexState(prev => prev > 0 ? prev - 1 : prev);
      } else if (evt.key === 'Enter' && cursorIndexState >= 0) {
      	handleValueChange(src[cursorIndexState]?.caption);
      }
    };
    const handleMouseDown = (evt) => {handleValueChange(evt.target.value);}

    // render
    const sendProps = {
      onChange: handleChange,
		  onKeyDown: handleKeyDown,
      onMouseDown: handleMouseDown,
      cursorIndexState, setCursorIndexState,
      ...props
    };
    return (<WrappedComponent {...sendProps}/>);
  };
};

// ------------------------------------------------------------------------- //