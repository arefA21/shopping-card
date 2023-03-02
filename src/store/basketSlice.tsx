import { createSlice } from "@reduxjs/toolkit";

interface Card {
  id: number;
  name: string;
  price: number;
}

interface BasketItem {
  items: Card[];
}

const initialState: BasketItem = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = basketSlice.actions;
export default basketSlice.reducer;
