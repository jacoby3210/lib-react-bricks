import { useContainer, useValueOption } 
from '@lib-react-bricks/src/modules/core/advanced';
import { resolveClassName } 
from '@lib-react-bricks/src/modules/core/utils';

// -------------------------------------------------------------------------- //
// Layout Manager - to switch of displayed content in the view by linear order. 
// -------------------------------------------------------------------------- //

export const Navigator = props => {

  const ctxContainer = useContainer();
  const ctxValueOption = useValueOption();

  const { className } = ctxContainer.state;
  const { max, modular, step, index, value } = ctxValueOption?.state;

	const firstBtnProps = {
		className: resolveClassName(className, 'first'),
		onClick: () => {ctxValueOption.dispatch({type: 'SET_INDEX_FIRST'});},
		disabled: index === 0,
	}

	const prevBtnProps = {
		className: resolveClassName(className, 'prev'),
		onClick: () => {ctxValueOption.dispatch({type: 'SET_INDEX_PREVIOUS'});},
		disabled: index === 0 && !modular,
	}

	const nextBtnProps = {
		className: resolveClassName(className, 'next'),
		onClick: () => {ctxValueOption.dispatch({type: 'SET_INDEX_NEXT'});},
		disabled: index === max - 1 && !modular,
	}

  const lastBtnProps = {
		className: resolveClassName(className, 'last'),
		onClick: () => {ctxValueOption.dispatch({type: 'SET_INDEX_LAST'});},
		disabled: index === max - 1,
	}

	return (
		<>
			<button { ... firstBtnProps } >
				<i className={'fa-solid fa-angle-double-left'}></i>
			</button>
			<button { ... prevBtnProps }>
				<i className={'fa-solid fa-angle-left'}></i>
			</button>
			<button { ... nextBtnProps }>
				<i className={'fa-solid fa-angle-right'}></i>
			</button>
			<button { ... lastBtnProps }>
				<i className={'fa-solid fa-angle-double-right'}></i>
			</button>
		</>
	);
	
};


// -------------------------------------------------------------------------- //