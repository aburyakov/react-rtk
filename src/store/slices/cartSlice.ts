import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../../types/book';
import { RootState } from '../store';

export interface CartState {
  cart: Book[];
}

const loadCartState = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading cart state', err);
    return [];
  }
};

const initialState: CartState = {
  cart: loadCartState(),
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Book>) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<Book['id']>) => {
      state.cart = state.cart.filter((book) => book.id !== action.payload);
    },
  },
})

export const selectCart = (state: RootState) => state.cart.cart

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;