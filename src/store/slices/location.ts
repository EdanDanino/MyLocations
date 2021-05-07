import { createSlice } from "@reduxjs/toolkit";
import { locationStateType, locationActionType } from "./types";

const initialState: locationStateType[] = [];

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    addLocation: (state, action: locationActionType) => {
      return [...state, action.payload];
    },
    removeLocation: (state, action: locationActionType) => {
      return state.filter(({ id }: { id: string }) => {
        return id !== action.payload.id;
      });
    },
    updateLocation: (state, action: locationActionType) => {
      const location = state.find(
        (location) => location.id === action.payload.id
      );
      if (location) {
        const mergedObj = { ...location, ...action.payload };
        Object.assign(location, mergedObj);
      }
    },
  },
});

export const {
  addLocation,
  removeLocation,
  updateLocation,
} = locationSlice.actions;
export default locationSlice.reducer;
