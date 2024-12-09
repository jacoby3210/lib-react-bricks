import { useContainer, useValueDigital } 
from '@lib-react-bricks/src/modules/core/advanced';
import { resolveClassName } 
from '@lib-react-bricks/src/modules/core/utils';

// -------------------------------------------------------------------------- //
// Layout Manager - to switch of displayed content in the view by linear order. 
// -------------------------------------------------------------------------- //

export const Navigator = props => {

  const ctxContainer = useContainer();
  const ctxValueDigital = useValueDigital();

  const { className } = ctxContainer.state;
  const { max, modular, step, value } = ctxValueDigital?.state;

	const firstBtnProps = {
		className: resolveClassName(className, 'first'),
		onClick: () => {ctxValueDigital.dispatch({type: 'CHANGE', payload: {next: 0}});},
		disabled: value === 0,
	}

	const prevBtnProps = {
		className: resolveClassName(className, 'prev'),
		onClick: () => {ctxValueDigital.dispatch({type: 'MODIFY', payload: {modifier: -step}});},
		disabled: value === 0 && !modular,
	}

	const nextBtnProps = {
		className: resolveClassName(className, 'next'),
		onClick: () => {ctxValueDigital.dispatch({type: 'MODIFY', payload: {modifier: step}});},
		disabled: value === max - step && !modular,
	}

	const lastBtnProps = {
		className: resolveClassName(className, 'last'),
		onClick: () => {ctxValueDigital.dispatch({type: 'CHANGE', payload: {next: max - step}});},
		disabled: value === max - step,
	}

	return (
		<>
			<button {...firstBtnProps} >
				<i className={'fa-solid fa-angle-double-left'}></i>
			</button>
			<button {...prevBtnProps}>
				<i className={'fa-solid fa-angle-left'}></i>
			</button>
			<button {...nextBtnProps}>
				<i className={'fa-solid fa-angle-right'}></i>
			</button>
			<button {...lastBtnProps}>
				<i className={'fa-solid fa-angle-double-right'}></i>
			</button>
		</>
	);
	
};


// -------------------------------------------------------------------------- //