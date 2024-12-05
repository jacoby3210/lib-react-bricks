import {useReveal} from '@lib-react-bricks/src/modules/core/advanced';
import {resolveClassName}  from '@lib-react-bricks/src/modules/core/utils';

// -------------------------------------------------------------------------- //
// Layout - to render the content of the reveal.
// -------------------------------------------------------------------------- //

const Controller = props => {

  const {className, children, label, ...attributes} = props;
	const reveals = useReveal();

  const onClick = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    reveals.dispatch({type: reveals.state.shown ? 'HIDE' : 'SHOW'});
  };

  return (
    <button className={resolveClassName(className, 'button')} onClick={onClick}>
      <span className={resolveClassName(className, 'button-label')}>
        {label || children}
      </span>
      <span className={resolveClassName(className, 'button-sprite')}>
        <i className={'fa-solid fa-chevron-down'}></i>
      </span>
    </button>
  );
}

export const Dropout = {Controller,}

// -------------------------------------------------------------------------- //