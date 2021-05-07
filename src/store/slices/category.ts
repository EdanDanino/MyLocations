import { createSlice } from "@reduxjs/toolkit";
import { categoryActionType, categoryStateType } from "./types";

const initialState: categoryStateType[] = [];

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory: (state, action: categoryActionType) => {
      return [...state, action.payload];
    },
    removeCategory: (state, action: categoryActionType) => {
      return state.filter(({ id }: { id: string }) => {
        return id !== action.payload.id;
      });
    },
    updateCategory: (state, action: categoryActionType) => {
      const category = state.find(
        (category) => category.id === action.payload.id
      );
      if (category) {
        category.name = action.payload.name;
      }
    },
  },
});

export const {
  addCategory,
  removeCategory,
  updateCategory,
} = categorySlice.actions;
export default categorySlice.reducer;
