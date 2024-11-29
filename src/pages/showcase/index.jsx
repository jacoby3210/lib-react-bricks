
import { useState } from 'react';
import { Components } from "./components";
import { Layouts } from './layouts';
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
        <Components/>
        <Layouts/>
      </div>
    </section>
  );
}

export default ShowcasePage;

// -------------------------------------------------------------------------- //