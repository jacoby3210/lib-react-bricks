import { configureStore } from '@reduxjs/toolkit';
import {Code} from "/src/code"

// -------------------------------------------------------------------------- //
// Create redux store for app.
// -------------------------------------------------------------------------- //

const locale = Code.Store.Slice.Creators.createArraySlice("locale", [{id:0, text: "Тест"}]);

export const store = configureStore({
  reducer: {
    locale: locale.reducer 
  },
});

// -------------------------------------------------------------------------- //