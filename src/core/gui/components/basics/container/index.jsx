import {useRef} from "react"

// -------------------------------------------------------------------------- //
// Layout - to use as a universal container for the contents.
// -------------------------------------------------------------------------- //

export const Container = props => {

  // initial props

  const { id, className, children, value } = props;

  // hooks

  const selfRef = useRef(null);

  // render
  
  return (
    <div id={id} className={className} ref={selfRef} value={value} >
      {children}
    </div>
  );
};

// -------------------------------------------------------------------------- //