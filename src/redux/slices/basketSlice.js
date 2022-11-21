import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  totalCount: 0,
  basketPizzas: ['1', '2'],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addPizza(state, action) {
      state.totalCount = action.payload;
    },
    addToBasket(state, action) {
      console.log(action.payload);
    },
  },
});

export const { addPizza, addToBasket } = basketSlice.actions;

export default basketSlice.reducer;
