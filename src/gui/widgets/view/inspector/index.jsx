import * as gCFG from "@lib-react-bricks/src/gui/config.jsx"

// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix:"inspector"});
gCFG.applyPackage(cfg, gCFG.propPackageSourceData, {});
gCFG.applyPackage(cfg, gCFG.propPackageValueBase, {value: {}});

// -------------------------------------------------------------------------- //
//  Widget - to generate form to view/edit objects c JS (basic)
// -------------------------------------------------------------------------- //

const Component = props => {

  // initial data

  const {children} = props;

  // render 
  
  return (<ul>{children}</ul>);

}

export const Template = props => {

  // initial props

  const { common, item, index } = props;
  
  // input handling

  const whenValueChange = (next, prev) => 
    common.whenValueChange({...common.value, [item.caption]: next});

  // render

  const valueProps = {whenValueChange, value: common.value[item.caption]};

  return (
    <div name={item.caption} type={item.datatype}>
      <label>{item.caption}</label>
      <item.Render {...item.props} {...valueProps}/>  
    </div>
  );
};

export const Inspector = {cfg, Component, Template}

// -------------------------------------------------------------------------- //