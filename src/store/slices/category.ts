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
      return state.map((category) =>
        category.id === action.payload.id ? action.payload : category
      );
    },
  },
});

export const {
  addCategory,
  removeCategory,
  updateCategory,
} = categorySlice.actions;
export default categorySlice.reducer;
