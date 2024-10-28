import * as globalCFG from "/src/gui/config.jsx"
// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = globalCFG.createConfig("checkbox");
globalCFG.applyPackage(cfg, globalCFG.propPackageBase, {className:cfg.CSS_CLASS_DEFAULT});
globalCFG.applyPackage(cfg, globalCFG.propPackageValueBase, {value: null});

// -------------------------------------------------------------------------- //
// React Component wrapping around the classic checkbox for simplicity.
// -------------------------------------------------------------------------- //

const Component = props => {

  // initial data
  const {
    id,
    children,
    onChange = (evt) => {},
    value,
    whenValueChange,
    whenValueModify,
    ...attributes
  } = props;

  // handlers
  const handleChange = (evt) => {
    onChange(evt),
    whenValueChange(!value, value);
  }

  // render 
  return (
    <input 
      {...attributes}
      checked={value} 
      type="checkbox" 
      value={value}
      onChange={handleChange} 
    />
  );
};

Component.propTypes = cfg.propTypes;
export const CheckBox = {cfg, Component};

// -------------------------------------------------------------------------- //