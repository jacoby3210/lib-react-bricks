import { 
  useValueBoolean 
} from '@lib-react-bricks/src/modules/core/advanced';

// -------------------------------------------------------------------------- //
// Layout - to provides an advanced version of the classic checkbox.
// -------------------------------------------------------------------------- //

export const CheckBox = props => {

  // unpack data

  const {
    id,
    className,
    onChange = (evt) => {},
    ...attributes
  } = props;

  // hooks

  const ctxValueBoolean = useValueBoolean();

  // input handling

  const handleChange = (e) => {
    onChange(e)
    ctxValueBoolean?.dispatch({type: 'CHANGE', payload: {next: e.target.value}});
  }

  // render 

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