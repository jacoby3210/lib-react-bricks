// -------------------------------------------------------------------------- //
// Contains helper code that ensures the component's operation.
// -------------------------------------------------------------------------- //

const Controller = props => {

  // initial data
  
  const {className, children, caption, setShownState, ...attributes} = props;
  const cssPrefix = `button`; 

  // input handling

  const onClick = (evt) => {
      evt.stopPropagation();
      setShownState(prev => !prev);
  }

  // render

  return (
    <button className={cssPrefix} onClick={onClick}>
      <span className={`${cssPrefix}-caption`}>{caption || children}</span>
      <span className={`${cssPrefix}-arrow`}>
        <i className={'fa-solid fa-chevron-down'}></i>
      </span>
      <span className={`${cssPrefix}-caption`}/>
    </button>
  );
}

export const Dropout = {Controller,}

// -------------------------------------------------------------------------- //