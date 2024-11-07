import { useDispatch } from 'react-redux';
import * as gCFG from "@lib-react-bricks/src/gui/config.jsx"
import * as code from './code'

// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix:"inspector"});
gCFG.applyPackage(cfg, gCFG.propPackageSourceData, {});
gCFG.applyPackage(cfg, gCFG.propPackageValueBase);

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

  const { common, item, index, ...attributtes } = props;
  const signature = common.map[index];

  // hooks

  // input handling

  // render
  
  return (
    <div name={signature.caption} type={signature.datatype}>
      <label>{signature.caption}</label>
      <signature.Render/>  
    </div>
  );
};

export const Inspector = {cfg, Component, Template}

// -------------------------------------------------------------------------- //