import { PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export type categoryStateType = {
  id: string;
  name: string;
};

export interface coordinatesInterface {
  lat: number;
  lng: number;
}

export type locationStateType = {
  id: string;
  name: string;
  address: string;
  coordinates: coordinatesInterface;
  category: categoryStateType;
};
export type locationKey = keyof locationStateType;

export type StateType = {
  locations: locationStateType[];
  categories: categoryStateType[];
  selectedItem: selectedItemType;
};

export type selectedItemType = string | typeof v4 | null;

export type selectedItemActionType = PayloadAction<selectedItemType>;
export type locationActionType = PayloadAction<locationStateType>;
export type categoryActionType = PayloadAction<categoryStateType>;
