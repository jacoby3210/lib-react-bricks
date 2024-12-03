import { 
  useValueDigital 
} from '@lib-react-bricks/src/modules/core/advanced';

// -------------------------------------------------------------------------- //
// Layout - to track the user's clicks and display the total value.
// -------------------------------------------------------------------------- //

export const Clicker = props => {

  const {
    id,
    className,
    onChange = (e) => {},
  } = props;

  const ctxValueDigital = useValueDigital();
  
  const handleClick = (e) => {
    onChange(e)
    ctxValueDigital.dispatch({type: 'MODIFY'});
  }
  
  return (
    <div 
      id={id} className={className}
      onClick={handleClick} 
      data-cost={ctxValueDigital.state.step} 
      data-value={ctxValueDigital.state.value}
    >
      {ctxValueDigital.state.value}
    </div>
  );
};

// -------------------------------------------------------------------------- //