import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "user", // A unique name for the slice
  initialState: null, // Initial state
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

// Export actions for dispatch
export const { addUser, removeUser } = counterSlice.actions;

// Export reducer to be added to the store
export default counterSlice.reducer;
