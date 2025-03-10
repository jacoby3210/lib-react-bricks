import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "/src/project/pages/router.jsx";
import { store } from "./store";

// -------------------------------------------------------------------------- //
// The main React component defining the structure of the application.
// -------------------------------------------------------------------------- //

const App = (props) => (
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);

// -------------------------------------------------------------------------- //
// Integrating a React application into a web application.
// -------------------------------------------------------------------------- //

// async function enableMocking() {
//   if (process.env.NODE_ENV === "development") {
//     const { worker } = await import("/src/code/development/mocks/index.js");
//     return worker.start();
//   }
// }

console.log("Start Application");
const root = ReactDOM.createRoot(document.getElementById("root"));
// enableMocking().then(() => {
root.render(<App />);
// });

// -------------------------------------------------------------------------- //
