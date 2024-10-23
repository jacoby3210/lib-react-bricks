
import React, { useState } from 'react';
import { ExamplePart1 } from './parts/part-1';
import { ExamplePart2 } from './parts/part-2';
// import { ExamplePart3 } from './parts/part-3';
// import { ExamplePart4 } from './parts/part-4';
import "./index.css"
// ------------------------------------------------------------------------- //
// Showcase Application Page.                                                 //
// It is used to demonstrate the operation of components / layers / pages    //
// of the application in artificial conditions.                               //
// ------------------------------------------------------------------------- //

const ShowcasePage = receivedProps => {
  // initial data
  const {
    id,
    ...attributes
  } = receivedProps;
    
  // render
  return (
    <section id={id} {...attributes}>
      {"Its alive"}
      {/* <ExamplePart1/> */}
      <ExamplePart2/>
      {/* <ExamplePart3/> */}
      {/* <ExamplePart4/> */}
    </section>
  );
}

export default ShowcasePage;

// ------------------------------------------------------------------------- //