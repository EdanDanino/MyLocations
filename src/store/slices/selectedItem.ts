import { createSlice } from "@reduxjs/toolkit";
import { selectedItemActionType, selectedItemType } from "./types";

const initialState: selectedItemType = null;

const selectedItemReducer = createSlice({
  name: "selectedItem",
  initialState,
  reducers: {
    setSelectedItem: (state, action: selectedItemActionType) => {
      if (state === typeof {}) {
        Object.assign(state, action.payload);
      } else {
        // state = action.payload as selectedItemType;
      }
    },
    clearSelectedItem: (state) => {
      if (state === typeof {}) {
        Object.assign(state, null);
      }
    },
  },
});

export const {
  setSelectedItem,
  clearSelectedItem,
} = selectedItemReducer.actions;
export default selectedItemReducer.reducer;
