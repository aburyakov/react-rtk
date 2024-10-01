import { RootState } from '../store';
import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { cartSlice } from "../slices/cartSlice";

const cartMiddleware: any = (store: MiddlewareAPI<Dispatch<Action>, RootState>) => (next: Dispatch<Action>) => (action: Action) => {
  const nextResult = next(action);
  if (
    cartSlice.actions.addToCart.match(action) || 
    cartSlice.actions.removeFromCart.match(action)) 
  {
     localStorage.setItem('cart', JSON.stringify(store.getState().cart.cart));
  }
  return nextResult;
};

export default cartMiddleware;