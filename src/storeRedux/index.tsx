import { configureStore, combineReducers } from "@reduxjs/toolkit";
import boardsReducer from "./boardsSlice";

/* import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; */

/* const rootReducer = combineReducers({
  boards: boardsReducer,
 
});

const persistConfig = {
  key: "shopElf",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store); */

const store = configureStore({
  reducer: {
    boards: boardsReducer,
  },
});

export default store;
