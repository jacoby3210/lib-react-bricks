import React, { useCallback, useEffect, useRef, useState } from 'react';
import {Navigator}  from '@lib-react-bricks/src/common/gui/widgets/display/navigator'

// -------------------------------------------------------------------------- //
// Widget - to switch of displayed content in the view by the page index. 
// -------------------------------------------------------------------------- //

const Container = props => {

  const {children} = props;

  // render 

  return (
		<>
			<Navigator {...props}/>
			{children}
		</>
	);

};

export const Paginator  = {Container}

// -------------------------------------------------------------------------- //