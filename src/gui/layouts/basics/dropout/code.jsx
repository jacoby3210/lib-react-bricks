// -------------------------------------------------------------------------- //
// Contains helper code that ensures the component's operation.
// -------------------------------------------------------------------------- //

export const DropoutButton = props => {
  const {className, children, label, ...attributes} = props;
  const cssPrefix = `button`; 
  return (
    <button className={cssPrefix} {...attributes}>
      <span className={`${cssPrefix}-caption`}>{label || children}</span>
      <span className={`${cssPrefix}-arrow`}>
        <i className={'fa-solid fa-chevron-down'}></i>
      </span>
      <span className={`${cssPrefix}-caption`}/>
    </button>
  );
}

// -------------------------------------------------------------------------- //