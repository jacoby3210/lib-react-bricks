import PropTypes from 'prop-types';
import * as gCFG from "@lib-react-bricks/src/common/gui/config"

// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix:"dropout"});
gCFG.applyPackage(cfg, gCFG.propPackageValueBase, {value: null});
gCFG.applyPackage(cfg, {
  types: {shown: PropTypes.bool}, 
  values:{shown: false}
});

// -------------------------------------------------------------------------- //
// Contains helper code that ensures the component's operation.
// -------------------------------------------------------------------------- //

const DropoutButton = props => {
  const {className, children, caption, ...attributes} = props;
  const cssPrefix = `button`; 
  return (
    <button className={cssPrefix} {...attributes}>
      <span className={`${cssPrefix}-caption`}>{caption || children}</span>
      <span className={`${cssPrefix}-arrow`}>
        <i className={'fa-solid fa-chevron-down'}></i>
      </span>
      <span className={`${cssPrefix}-caption`}/>
    </button>
  );
}

// -------------------------------------------------------------------------- //
// Layout - to render the content of the reveal.
// -------------------------------------------------------------------------- //

const Component = props => {

  // initial data

  const {
    children,
    className,
    caption,
    shownState,
    setShownState,
  } = props;

  // render 
  
  const dropoutButtonProps = {
    className,
    caption, 
    onMouseDown: (evt) => {
      evt.stopPropagation();
      setShownState(!shownState);
    }
  }

  return (
    shownState 
      ? <>
          <DropoutButton {...dropoutButtonProps}/>
          {children}
        </>
      : <DropoutButton {...dropoutButtonProps}/>
  );
};

Component.propTypes = cfg.types;
export const Dropout = {cfg, Component}

// -------------------------------------------------------------------------- //