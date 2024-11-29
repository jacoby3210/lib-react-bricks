import {useCallback} from 'react';
import { useReveals } from '../../../advanced/markup/reveals';

// -------------------------------------------------------------------------- //
// Contains helper code that ensures the component's operation.
// -------------------------------------------------------------------------- //

const Controller = props => {

  // initial data
  
  const {className, children, label, ...attributes} = props;
  const cssPrefix = `button`; 
	const reveals = useReveals();

  // input handling
  
  const onClick = useCallback(
    (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      reveals.dispatch({type: reveals.state.shown ? 'HIDE' : 'SHOW'});
    }, [reveals]
  );

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