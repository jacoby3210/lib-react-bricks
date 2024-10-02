import {Container} from "/src/gui/layouts/basics/container"
import * as cfg from './config';
// ------------------------------------------------------------------------- //
// React Component to output multiple radio buttons as a single component.  
// ------------------------------------------------------------------------- //

const Component = props => {

	// initial props
  const {children, src, Template, ...attributes} = props;
	
  // render
	return (
    <Container.Component 
      {...attributes}
    >
      {children}
    </Container.Component>
  );
};

Component.propTypes = cfg.propTypes;
export const RadioBar = {cfg, Component};

// ------------------------------------------------------------------------- //