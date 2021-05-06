import { createSlice } from "@reduxjs/toolkit";
import { selectedItemActionType, selectedItemType } from "./types";

const initialState: selectedItemType = { id: "" };

const selectedItemReducer = createSlice({
  name: "selectedItem",
  initialState,
  reducers: {
    setSelectedItem: (state, action: selectedItemActionType) => {
      const mergedObj = { ...state, ...action.payload };
      Object.assign(state, mergedObj);
    },
    clearSelectedItem: (state) => {
      Object.assign(state, { id: "" });
    },
  },
});

export const {
  setSelectedItem,
  clearSelectedItem,
} = selectedItemReducer.actions;
export default selectedItemReducer.reducer;
