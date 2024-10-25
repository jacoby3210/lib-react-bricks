import * as cfg from './config';
// ------------------------------------------------------------------------- //
// React Component to track the user's clicks and display the total value.
// ------------------------------------------------------------------------- //

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

    // handlers
    const handleClick = () => whenValueModify(valueStep);

    // render 
    return (
      <div {...attributes} id={id} onClick={handleClick} cost={valueStep} value={value} >
        {value}
      </div>
    );
};

Component.propTypes = cfg.propTypes;
export const Clicker = {cfg, Component};

// ========================================================================= //