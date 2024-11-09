import { createSlice } from '@reduxjs/toolkit';

// ------------------------------------------------------------------------- //
// Create Slice to manage dictionary of items available to the user.
// ------------------------------------------------------------------------- //

export const createArraySlice = (name, data) => {

  // initial data

  const initialState = {
    counter: data.length ? Math.max(...data.map(item => item.id)) : 0,
    items:
      Array.isArray(data) 
        ? data.reduce((acc, item) => {acc[item.id] = item; return acc;}, {}) 
        : data
  };

  // create slice
  
  return createSlice({
    name,
    initialState,
    reducers: {

      add: (state, action) => {
        const newId = ++state.counter;
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