import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import {
  categroyReducer,
  locationReducer,
  selectedItemReducer,
} from "./slices";

const rootReducer = combineReducers({
  locations: locationReducer,
  categories: categroyReducer,
  selectedItem: selectedItemReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger],
});
const persistor = persistStore(store);

const reduxStore = { store, persistor };

export default reduxStore;
