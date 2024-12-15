import React from "react";
import { Routes, Route } from "react-router-dom";
import "@lib-react-bricks/src/assets/themes/theme.css";
import { PageCoreComponents } from "@lib-react-bricks/src/modules/core/pages/components";
import { PageCoreLayouts } from "@lib-react-bricks/src/modules/core/pages/layouts";

// ------------------------------------------------------------------------- //
// Main Application Router.
// Using router to control navigation through application pages.
// ------------------------------------------------------------------------- //

function Router() {
  return (
    <Routes>
      <Route element={<PageCoreComponents />} path='/core/components' exact />
      <Route element={<PageCoreLayouts />} path='/core/layouts/' exact />
      <Route element={<PageCoreLayouts />} path='/' exact />
    </Routes>
  );
}

export default React.memo(Router);

// ------------------------------------------------------------------------- //
