// -------------------------------------------------------------------------- //
// Layout - to track the user's clicks and display the total value.
// -------------------------------------------------------------------------- //

export const Clicker = props => {

  // initial props
  
  const {
    id,
    className,
    children,
    value, valueMode, valueRangeMax, valueRangeMin, valueSpeed, valueStep,
    whenValueChange,
    whenValueModify,
  } = props;

  // input handling

  const handleClick = () => whenValueModify(valueStep);

  // render 
  
  return (
    <div 
      id={id} className={className}
      onClick={handleClick} 
      data-cost={valueStep} 
      data-value={value}
    >
      {value}
    </div>
  );
};

// -------------------------------------------------------------------------- //