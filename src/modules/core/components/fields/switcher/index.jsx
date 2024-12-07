import { useValueOption } from '@lib-react-bricks/src/modules/core/advanced';
import { resolveClassName } from '@lib-react-bricks/src/modules/core/utils';

// -------------------------------------------------------------------------- //
// Layout - to select one option from the source list (alt mode \ enum).
// -------------------------------------------------------------------------- //

export const Switcher = props => {

  const { className, data } = props;
  const ctxValueOption = useValueOption();
  const {index, loop, max,  value} = ctxValueOption.state;

  const displayText = data[index].caption || "Not Found";

  const btnPrevProps = {
    className: resolveClassName(className, 'prev'), 
		onClick: (e) => ctxValueOption.dispatch({ type: 'PREVIOUS' }),
		disabled: index === 0 && !loop,
	}
  
  const btnNextProps = {
    className: resolveClassName(className, 'next'), 
		onClick: (e) => ctxValueOption.dispatch({ type: 'NEXT' }),
		disabled: index === max - 1 && !loop,
	}

  return (
    <>
      <button {... btnPrevProps}>←</button>
      <span>{displayText}</span>
      <button {... btnNextProps}>→</button>
    </>
  );
};

// -------------------------------------------------------------------------- //