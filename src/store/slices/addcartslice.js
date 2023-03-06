import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // array of selected product data
  total: 0, // total cost of selected products
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(e => e.key === item.key);
      if (existingItem) {
        existingItem.amount += item.amount;
      } else {
        state.items.push(item);
      }
      state.total += item.prices * item.amount;

    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(e => e.id === action.payload.key);
      if (itemIndex !== -1) {
        state.total -= state.items[itemIndex].prices * state.items[itemIndex].amount;
        state.items.splice(itemIndex, 1);
      }
    },
  },
});

export const { addItem, removeItem } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
