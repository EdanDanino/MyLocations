import { createSlice } from "@reduxjs/toolkit";
import { selectedItemActionType, selectedItemType } from "./types";

const initialState: selectedItemType = {} as selectedItemType;

const selectedItemReducer = createSlice({
  name: "selectedItem",
  initialState,
  reducers: {
    setSelectedItem: (state, action: selectedItemActionType) => {
      Object.assign(state, action.payload);
    },
    clearSelectedItem: (state) => {
      Object.assign(state, null);
    },
  },
});

export const {
  setSelectedItem,
  clearSelectedItem,
} = selectedItemReducer.actions;
export default selectedItemReducer.reducer;
