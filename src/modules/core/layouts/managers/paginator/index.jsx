import {Navigator}  from '@lib-react-bricks/src/modules/core/layouts/managers/navigator'

// -------------------------------------------------------------------------- //
// Layout Manager - to switch of displayed content in the view by the page index. 
// -------------------------------------------------------------------------- //

const Container = props => {

  const {children} = props;

  return (
		<>
			<Navigator {...props}/>
			{children}
		</>
	);

};

export const Paginator  = {Container}

// -------------------------------------------------------------------------- //