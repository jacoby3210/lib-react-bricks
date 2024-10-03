import {useRef} from "react"
import * as cfg from "./config"
// ------------------------------------------------------------------------- //
// React Component for use as a container for other components.
// ------------------------------------------------------------------------- //

export const Component = props => {

    // initial props
    const {
      id,
      className,
      children,
      value,
      whenValueChange,
      whenValueModify,
      ...attributes
    } = props;

    // hooks
    const selfRef = useRef(null);

    // render
    return (
      <div id={id} className={className} value={value} {...attributes}>
          {children}
      </div>
    );
};

Component.propTypes = cfg.propTypes;
export const Container = {cfg, Component}

// ------------------------------------------------------------------------- //