import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  selectedItem: null,
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    selectItem: (state, action) => {
      state.selectedItem = state.items.find((item) => item.id === action.payload);
    },
  },
});

export const { addItem, removeItem, selectItem } = itemSlice.actions;
export default itemSlice.reducer;
