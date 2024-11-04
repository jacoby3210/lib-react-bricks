import React, { useCallback, useEffect, useRef, useState } from 'react';
import {Browser}    from '@lib-react-bricks/src/gui/widgets/content/browser'
import {Navigator}  from '@lib-react-bricks/src/gui/widgets/content/navigator'
import * as gCFG    from "@lib-react-bricks/src/gui/config"

// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix: "paginator"});
gCFG.applyPackage(cfg, Browser.cfg, {});
gCFG.applyPackage(cfg, gCFG.propPackageValueNumber, {value: 0});

// -------------------------------------------------------------------------- //
// Widget - to switch of displayed content in the view by the page index. 
// -------------------------------------------------------------------------- //

export const Component = props => {

  const {children} = props;
  // render 

  return (
		<>
			<Navigator.Component {...props}/>
			{children}
		</>
	);

};

Component.propTypes = cfg.types;
export const Paginator = {cfg, Component}

// -------------------------------------------------------------------------- //