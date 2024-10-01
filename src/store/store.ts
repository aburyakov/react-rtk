import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import cartSlice from './slices/cartSlice';
import { booksApi } from '../services/books';
import cartMiddleware from './middlewares/cartMiddleware';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat(booksApi.middleware)
      .concat(cartMiddleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch