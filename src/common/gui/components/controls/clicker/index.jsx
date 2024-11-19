// -------------------------------------------------------------------------- //
// Layout - to track the user's clicks and display the total value.
// -------------------------------------------------------------------------- //

export const Clicker = props => {

  // initial props
  
  const {
    id,
    className,
    children,
    modular, 
    max, 
    min, 
    step,
    valueSpeed, 
    value, 
    whenValueChange,
    whenValueModify,
  } = props;

  // input handling

  const handleClick = () => whenValueModify(step);

  // render 
  
  return (
    <div 
      id={id} className={className}
      onClick={handleClick} 
      data-cost={step} 
      data-value={value}
    >
      {value}
    </div>
  );
};

// -------------------------------------------------------------------------- //