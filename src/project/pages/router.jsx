import React from "react";
import { Routes, Route } from "react-router-dom";
import "/src/assets/themes/theme.css";
import { PageCoreComponents } from "/src/modules/core/pages/components";
import { PageCoreLayouts } from "/src/modules/core/pages/layouts";
import { PageDnDLayouts } from "/src/modules/dnd/pages/layouts";

// ------------------------------------------------------------------------- //
// Main Application Router.
// Using router to control navigation through application pages.
// ------------------------------------------------------------------------- //

function Router() {
  return (
    <Routes>
      <Route element={<PageCoreComponents />} path='/core/components' exact />
      <Route element={<PageCoreLayouts />} path='/core/layouts/' exact />
      <Route element={<PageDnDLayouts />} path='/dnd' exact />
      <Route element={<PageDnDLayouts />} path='/' exact />
    </Routes>
  );
}

export default React.memo(Router);

// ------------------------------------------------------------------------- //
