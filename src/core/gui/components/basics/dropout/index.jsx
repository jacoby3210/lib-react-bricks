import {useCallback} from 'react';

// -------------------------------------------------------------------------- //
// Contains helper code that ensures the component's operation.
// -------------------------------------------------------------------------- //

const Controller = props => {

  // initial data
  
  const {className, children, label, setShownState, ...attributes} = props;
  const cssPrefix = `button`; 

  // input handling

  const onClick = useCallback(
    (evt) => {
      evt.stopPropagation();
      setShownState(prev => !prev);
    }, [setShownState]
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