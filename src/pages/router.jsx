import React from 'react';
import {Routes, Route } from 'react-router-dom';
import ShowcasePage from './showcase'

// ------------------------------------------------------------------------- //
// Main Application Router.
// Using router to control navigation through application pages.
// ------------------------------------------------------------------------- //

function Router() {
  return (
    <Routes>
      <Route element={<ShowcasePage />} path="/" exact />
    </Routes>
  );
}

export default React.memo(Router);

// ------------------------------------------------------------------------- //