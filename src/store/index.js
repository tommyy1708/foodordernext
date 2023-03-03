import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from './slices/addcartslice';

const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
  },
});

export default store;
