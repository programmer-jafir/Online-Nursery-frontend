import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TUser = {
  name: string;
  phone: string;
  address: string;
  postCode: number;
  district: string;
};

export type TProduct = {
  _id?: string;
  image: string;
  name: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
  rating: number;
};

export type TOrder = {
  _id?: string; 
  user: TUser;
  products: TProduct[];
  // status: string; 
};

type TInitialState = {
  orders: TOrder[];
};

const initialState: TInitialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    createOrder: (state, action: PayloadAction<TOrder>) => {
      state.orders.push({ ...action.payload });
    },
  },
});

export const { createOrder } = orderSlice.actions;
export default orderSlice.reducer;
