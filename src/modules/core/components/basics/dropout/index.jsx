import {useReveal} from '../../../advanced/markup/reveal';

// -------------------------------------------------------------------------- //
// Layout - to render the content of the reveal.
// -------------------------------------------------------------------------- //

const Controller = props => {

  // initial data
  
  const {className, children, label, ...attributes} = props;
  const cssPrefix = `button`; 
	const reveals = useReveal();

  // input handling
  
  const onClick = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    reveals.dispatch({type: reveals.state.shown ? 'HIDE' : 'SHOW'});
  };

  // render

  return (
    <button className={cssPrefix} onClick={onClick}>
      <span className={`${cssPrefix}-label`}>{label || children}</span>
      <span className={`${cssPrefix}-sprite`}>
        <i className={'fa-solid fa-chevron-down'}></i>
      </span>
    </button>
  );
}

export const Dropout = {Controller,}

// -------------------------------------------------------------------------- //