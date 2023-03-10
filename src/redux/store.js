import { configureStore } from '@reduxjs/toolkit';
import {contactsReducer} from './contactsSlice';
import filterReduser from './filtersSlice';
import { authReducer } from './auth/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistReduser = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistReduser,
    contacts: contactsReducer,
    filter: filterReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  
});

export const persistor = persistStore(store);