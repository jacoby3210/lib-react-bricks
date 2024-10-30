
import * as gCFG from "/src/gui/config.jsx"
// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix: "repeater"});
gCFG.applyPackage(cfg, gCFG.propPackageSourceData, {});

// -------------------------------------------------------------------------- //
// Layout to generate a gui for an item in an source data by default.         //
// -------------------------------------------------------------------------- //

const Component = props => {

    // initial data

    const {common, item, ...attributes} = props;

    // render 
    
    return (<li id={item.id} name={item.name} {...attributes}>{item?.text}</li>);

};
  
export const Item = {cfg, Component}

// -------------------------------------------------------------------------- //