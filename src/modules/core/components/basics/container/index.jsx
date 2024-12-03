import {useRef} from "react"

// -------------------------------------------------------------------------- //
// Layout - to use as a universal container for the contents.
// -------------------------------------------------------------------------- //

export const Container = props => {

  const { 
    id, 
    className, 
    children, 
    value 
  } = props;
  
  const selfRef = useRef(null);
  
  return (
    <div id={id} className={className} ref={selfRef} value={value} >
      {children}
    </div>
  );
};

// -------------------------------------------------------------------------- //