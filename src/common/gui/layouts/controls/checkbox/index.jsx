import * as gCFG from "@lib-react-bricks/src/common/gui/config"

// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix: "checkbox"});
gCFG.applyPackage(cfg, gCFG.propPackageValueBoolean, {value: false});

// -------------------------------------------------------------------------- //
// Layout - to provides an advanced version of the classic checkbox.
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

  // input handling

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

Component.propTypes = cfg.types;
export const CheckBox = {cfg, Component};

// -------------------------------------------------------------------------- //