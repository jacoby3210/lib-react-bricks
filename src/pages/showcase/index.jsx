
import React, { useState } from 'react';
import { Common } from "./common";
import { Widgets } from './widgets';
import "./index.css"

// -------------------------------------------------------------------------- //
// Showcase Application Page.                                                //
// It is used to demonstrate the operation of components / layers / pages    //
// of the application in artificial conditions.                              //
// -------------------------------------------------------------------------- //

const ShowcasePage = props => {

  // initial data

  const {id, ...attributes} = props;
    
  // render
  
  return (
    <section id={id} {...attributes}>
      {"Its alive"}
      <div>
        <Common/>
        <Widgets/>
      </div>
    </section>
  );
}

export default ShowcasePage;

// -------------------------------------------------------------------------- //