import * as gCFG from "@lib-react-bricks/src/common/gui/config"

// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix: "clicker"});
gCFG.applyPackage(cfg, gCFG.propPackageValueNumber, {value: 0});

// -------------------------------------------------------------------------- //
// Layout - to track the user's clicks and display the total value.
// -------------------------------------------------------------------------- //

const Component = props => {

  // initial props
  
  const {
    id,
    children,
    value, valueMode, valueRangeMax, valueRangeMin, valueSpeed, valueStep,
    whenValueChange,
    whenValueModify,
    ...attributes
  } = props;

  // input handling

  const handleClick = () => whenValueModify(valueStep);

  // render 
  
  return (
    <div 
      id={id} onClick={handleClick} 
      data-cost={valueStep} 
      data-value={value}
      {...attributes} 
    >
      {value}
    </div>
  );
};

Component.propTypes = cfg.types;
export const Clicker = {cfg, Component};

// -------------------------------------------------------------------------- //