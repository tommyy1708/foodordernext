import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // array of selected product data
  tax: 0,
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
      state.tax += item.prices * item.amount * 0.06;
      state.total += item.prices * item.amount;
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(e => e.id === action.payload.key);
      if (itemIndex !== -1) {
        state.total -= state.items[itemIndex].prices * state.items[itemIndex].amount;
        state.tax -= state.items[itemIndex].prices * state.items[itemIndex].amount * 0.06;
        state.items.splice(itemIndex, 1);
      }
    },
    updateItem:(state,action) =>{
      state.items = action.payload;
    },
  },
});

export const { addItem, removeItem,updateItem } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
