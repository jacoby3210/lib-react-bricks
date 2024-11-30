import { configureStore } from '@reduxjs/toolkit';

// -------------------------------------------------------------------------- //
// Create redux store for app.
// -------------------------------------------------------------------------- //

// const locale = Code.Store.Slice.Creators.createArraySlice("locale", [{id:0, text: "Тест"}]);

export const store = configureStore({
  reducer: {
    add: (state = {}, action) => {
      switch (action.type) {
        default:
          return state;
      }
    },
  },
});

// -------------------------------------------------------------------------- //