import React 						from 'react'
import ReactDOM 				from 'react-dom/client'
import {Provider}				from 'react-redux';
import {BrowserRouter} 	from 'react-router-dom';
import {store} 					from '/src/code/store/store.js';
import Router 					from '/src/pages/router.jsx'
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
		const { worker } = await import("/src/code/development/mocks/index.js");    
		return worker.start();  
	}
}

console.log("Start Application")
const root = ReactDOM.createRoot(document.getElementById('root'));
enableMocking().then(() => {root.render(<App/>);});

// ========================================================================= //