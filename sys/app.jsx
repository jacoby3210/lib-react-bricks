import React            from 'react'
import ReactDOM         from 'react-dom/client'
import {Provider}       from 'react-redux';
import {BrowserRouter}  from 'react-router-dom';
import {store}          from '@lib-react-bricks/src/code/store';
import Router           from '@lib-react-bricks/src/pages/router.jsx'

// ========================================================================= //
// The main React component defining the structure of the application.
// ========================================================================= //

const App = receivedProps => (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// ========================================================================= //
// Integrating a React application into a web application.
// ========================================================================= //

async function enableMocking() {
  if (process.env.NODE_ENV === "development") {
    const { worker } = await import("@lib-react-bricks/src/code/development/mocks/index.js");    
    return worker.start();  
  }
}

console.log("Start Application")
const root = ReactDOM.createRoot(document.getElementById('root'));
enableMocking().then(() => {root.render(<App/>);});

// ========================================================================= //