import React from 'react';
import {Routes, Route } from 'react-router-dom';
import "@lib-react-bricks/src/assets/themes/theme.css"
import {CoreComponentsPage} from './core-components'

// ------------------------------------------------------------------------- //
// Main Application Router.
// Using router to control navigation through application pages.
// ------------------------------------------------------------------------- //

function Router() {
  return (
    <Routes>
      <Route element={<CoreComponentsPage />} path="/" exact />
    </Routes>
  );
}

export default React.memo(Router);

// ------------------------------------------------------------------------- //