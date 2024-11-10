import { useDispatch } from 'react-redux';

// -------------------------------------------------------------------------- //
// Layout - to represent a button that calls an action from store.
// -------------------------------------------------------------------------- //

export const Button = props => {

  // initial props

  const { 
    action, 
    children, 
    label, 
    onClick, 
  } = props;
  
  // hooks
  
  const dispatch = action ? useDispatch() : null;

  // input handling

  const handleClick = action ? (evt) => {
    if(action) dispatch(action()) 
    if(onClick) onClick(evt);
  }

  // render
  
  return (
    <button onClick={handleClick}>
      {label || children}
    </button>
  );
};

// -------------------------------------------------------------------------- //