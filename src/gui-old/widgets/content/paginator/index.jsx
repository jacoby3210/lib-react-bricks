import React, { useCallback, useEffect, useRef, useState } from 'react';
import {Browser}    from '/src/gui/widgets/content/browser'
import {Navigator}  from '/src/gui/widgets/content/navigator'
import * as gCFG    from "/src/gui/config"
// -------------------------------------------------------------------------- //
// Configuration.
// -------------------------------------------------------------------------- //

const cfg = gCFG.createConfig({postfix: "paginator"});
gCFG.applyPackage(cfg, Browser.cfg, {});
gCFG.applyPackage(cfg, gCFG.propPackageValueNumber, {value: 0});

// -------------------------------------------------------------------------- //
// React Component - switching of displayed content in the view by the page index. 
// -------------------------------------------------------------------------- //

export const Component = props => {
  console.log(2, props)

  // render 
  return (
		<>
			<Navigator.Component {...props}/>
			<Browser.Component {...props}/>
		</>
	);

};

Component.propTypes = cfg.types;
export const Paginator = {cfg, Component}

// -------------------------------------------------------------------------- //