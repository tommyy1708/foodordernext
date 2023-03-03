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
      state.items.push(item);
      state.total += item.prices;
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex !== -1) {
        state.total -= state.items[itemIndex].price;
        state.items.splice(itemIndex, 1);
      }
    },
  },
});

export const { addItem, removeItem } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
