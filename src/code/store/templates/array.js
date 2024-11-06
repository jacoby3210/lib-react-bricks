import { createSlice } from '@reduxjs/toolkit';

// ------------------------------------------------------------------------- //
// Create Slice to manage array available to the user.
// ------------------------------------------------------------------------- //

export const createArraySlice = (name, array) => {
  const initialState = {array, counter: 0};
  return createSlice({
    name,
    initialState,
    reducers: {

      // Adding a new item
      add: (state, action) => {state.array.push({...action.payload, id: state.counter++});},

      // Edit an existing item
      edit: (state, action) => {
      },

      // Deleting only the item
      remove: (state, action) => {
        return state.array.filter(el => !(el.id === action.payload));
      }
    }
  })
}

// ------------------------------------------------------------------------- //