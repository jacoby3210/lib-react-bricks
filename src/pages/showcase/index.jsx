
import React, { useState } from 'react';
import {GroupBasics} from "./groups/basics"
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
        <GroupBasics/>
      </div>
      {/* <ExamplePart2/> */}
      {/* <ExamplePart3/> */}
      {/* <ExamplePart4/> */}
    </section>
  );
}

export default ShowcasePage;

// -------------------------------------------------------------------------- //