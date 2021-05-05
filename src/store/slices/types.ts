import { PayloadAction } from "@reduxjs/toolkit";

export type categoryStateType = {
  id: string;
  name: string;
  addedDate: Date;
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
};

export type locationActionType = PayloadAction<locationStateType>;
export type categoryActionType = PayloadAction<categoryStateType>;
