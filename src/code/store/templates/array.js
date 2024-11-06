import { createSlice } from '@reduxjs/toolkit';

// ------------------------------------------------------------------------- //
// Create Slice to manage dictionary of items available to the user.
// ------------------------------------------------------------------------- //

export const createArraySlice = (name, array) => {

  // initial data

  const initialState = {
    counter: array.length ? Math.max(...array.map(item => item.id)) : 0,
    items: array.reduce((acc, item) => (acc[item.id] = item), {}),
  };

  // create slice
  
  return createSlice({
    name,
    initialState,
    reducers: {

      add: (state, action) => {
        const newId = state.counter++;
        state.items[newId] = { ...action.payload, id: newId };
      },
      
      remove: (state, action) => {
        delete state.items[action.payload];
      },

      update: (state, action) => {
        const { id, data } = action.payload;
        if (state.items[id]) {
          state.items[id] = { ...state.items[id], ...data };
        }
      },

    }
  });
}

// ------------------------------------------------------------------------- //