import {configureStore,combineReducers} from "@reduxjs/toolkit"
import cartReducer from "./cartRedux"
import userReducer from "./userRedux"
import Admin_userReducer from "./Admin_userRedux"
import productReducer from "./Admin_ProductRedux"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

  
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  const rootreducer=combineReducers({user:userReducer,cart:cartReducer,admin_user:Admin_userReducer,admin_product:productReducer})
  const persistedReducer = persistReducer(persistConfig, rootreducer)

export const  store=configureStore({
    reducer: persistedReducer,
    
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export const persistor = persistStore(store)