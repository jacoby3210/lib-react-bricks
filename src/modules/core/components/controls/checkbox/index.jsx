import { useValueBoolean } from '@lib-react-bricks/src/modules/core/advanced';

// -------------------------------------------------------------------------- //
// Control - to provides an advanced version of the classic checkbox.
// -------------------------------------------------------------------------- //

export const CheckBox = props => {

  const {
    id,
    className,
    onChange = (evt) => {},
    ...attributes
  } = props;

  const ctxValueBoolean = useValueBoolean();
  
  const handleChange = (e) => {
    onChange(e)
    ctxValueBoolean.dispatch({type: 'CHANGE', payload: {next: e.target.value}});
  }

  return (
    <input 
      id={id}
      className={className}
      checked={ctxValueBoolean.state.value} 
      type="checkbox" 
      value={ctxValueBoolean.state.value}
      onChange={handleChange} 
      {...attributes}
    />
  );
};

// -------------------------------------------------------------------------- //