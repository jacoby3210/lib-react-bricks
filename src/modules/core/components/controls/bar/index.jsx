import { useContainer } from '@lib-react-bricks/src/modules/core/advanced';

// -------------------------------------------------------------------------- //
// Template - to output multiple radio buttons as a single component.  
// -------------------------------------------------------------------------- //

const Template = (props) => {

  // initial data
  
  const {index, item} = props;

  const ctx = useContainer();
  const {name, className, value} = ctx.state;
  
  // input handling

  const handleChange = (e) => {}

  // render

  return (
    <label 
      className={`${className.split(" ")[0]}-option`} 
      key={index}
    >
      <input
        className={`${className.split(" ")[0]}-input`}
        checked={item.value == value}
        name={name}
        type="radio"
        value={item.value}
        onChange={handleChange}
      />
      {item.label}
    </label>
  );
}

export const Bar = {Template};

// -------------------------------------------------------------------------- //