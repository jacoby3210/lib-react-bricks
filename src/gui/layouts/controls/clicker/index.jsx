import { defaultProps, propTypes } from './config';

// ------------------------------------------------------------------------- //
// React Component to track the user's clicks and display the total value.
// ------------------------------------------------------------------------- //

const Component = props => {

		// initial props
    const {
      id,
      children,
			cost,
			value,
			whenValueChange,
			whenValueModify,
      ...attributes
    } = props;

    // handlers
    const handleClick = () => whenValueModify(cost);

    // render 
    return (
      <div id={id} onClick={handleClick} value={value} {...attributes}>
        {value}
      </div>
    );
};

export const NativeClicker = {Component, defaultProps};

// ========================================================================= //