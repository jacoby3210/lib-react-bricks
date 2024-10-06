import { Range } from '../../controls/range';
import { Swing } from '../../controls/swing';
import * as cfg from "./config"
// ------------------------------------------------------------------------- //
// React Component represents Range with control buttons.
// ------------------------------------------------------------------------- //

const Component = props => {

  // initial data
  const {rootRef, ...otherProps} = props;
  
  // render 
  return (
    <>
      <Range.Component {...Range.propValues} {...otherProps} />
      <Swing.Component {...Swing.propValues} {...otherProps}/>
    </>
  );
};

Component.propTypes = cfg.propTypes;
export const Slider = {cfg, Component};

// ------------------------------------------------------------------------- //