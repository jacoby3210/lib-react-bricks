import { useRepeat } from '@lib-react-bricks/src/modules/core/advanced';

// -------------------------------------------------------------------------- //
// Template - to output multiple radio buttons as a single component.  
// -------------------------------------------------------------------------- //

const Template = (props) => {

  // initial data
  
  const {index, item, rest} = props;
  // const {className, ...attributes} = common;
  const ctx = useRepeat();

  // input handling

  const handleChange = (e) => {}

  // render

  return (
    <label 
      // className={`${className.split(" ")[0]}-option`} 
      key={index}
    >
      <input
        // className={`${common.type}-input`}
        // checked={item.value == ct.value}
        // name={common.name}
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