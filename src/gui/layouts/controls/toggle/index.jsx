import * as gCFG from "/src/gui/config"

// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix: "toggle"});
gCFG.applyPackage(cfg, gCFG.propPackageSourceData, {});
gCFG.applyPackage(cfg, gCFG.propPackageValueBase, {value: null});

// -------------------------------------------------------------------------- //
// React Component to output multiple radio buttons as a single component.  
// -------------------------------------------------------------------------- //

const Template = (props) => {

  // initial data
  
  const {common, index, item} = props;
  const {className, ...attributes} = common;


  // input handling

  const handleChange = (e) => common.whenValueChange(e.target.value);

  // render

  return (
    <label 
      className={`${className.split(" ")[0]}-option`} 
      key={index}
    >
      <input
        className={`${common.type}-input`}
        checked={item.value == common.value}
        name={common.name}
        type="radio"
        value={item.value}
        onChange={handleChange}
      />
      {item.label}
    </label>
  );
}

Template.propTypes = cfg.types;
export const Toggle = {cfg, Template};

// -------------------------------------------------------------------------- //