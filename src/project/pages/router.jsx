import React from "react";
import { Routes, Route } from "react-router-dom";
import "@lib-react-bricks/src/assets/themes/theme.css";
import { CoreComponentsPage } from "./core/components";
import { CoreLayoutsPage } from "./core/layouts";

// ------------------------------------------------------------------------- //
// Main Application Router.
// Using router to control navigation through application pages.
// ------------------------------------------------------------------------- //

function Router() {
  return (
    <Routes>
      <Route element={<CoreComponentsPage />} path='/core/components' exact />
      <Route element={<CoreLayoutsPage />} path='/core/layouts/' exact />
      <Route element={<CoreLayoutsPage />} path='/' exact />
    </Routes>
  );
}

export default React.memo(Router);

// ------------------------------------------------------------------------- //
