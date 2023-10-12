import { configureStore, combineReducers } from "@reduxjs/toolkit";
import boardsReducer from "./board/boardsSlice";
import loadingReducer from "./isLoading/isLoadingSlice";
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

/* 

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

const rootReducer = combineReducers({
  boards: boardsReducer,
  loading: loadingReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

//export type RootState = ReturnType<typeof rootReducer>;
//or
export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
export default store;
/* reducer: {
    boards: boardsReducer,
  }, */
