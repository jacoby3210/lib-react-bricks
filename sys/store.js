import { configureStore } from '@reduxjs/toolkit';
import {Code} from "/src/code"

// -------------------------------------------------------------------------- //
// Create redux store for app.
// -------------------------------------------------------------------------- //

const locale = Code.Store.Slice.Creators.createArraySlice("locale", []);

export const store = configureStore({
  reducer: () => {
    locale.reducer 
  },
});

// -------------------------------------------------------------------------- //