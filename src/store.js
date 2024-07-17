import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CreateSlice'; // Adjust the path as necessary

const store = configureStore({
  reducer: {
    cart: cartReducer,
    addItem: (state, action) => {
      const item = state.items.find(i => i.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(i => i.name === action.payload.name);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.name !== action.payload);
    },
  },
});


export const { addItem, updateQuantity, removeItem } = cartSlice.actions;


export default store;
