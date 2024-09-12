import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TProduct } from './productSlice';

type Cart = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartState = {
  carts: Cart[];
  selectedItems: number;
  totalPrice: number;
  products: TProduct[]
};

const initialState: CartState = {
  carts: [],
  selectedItems: 0,
  totalPrice: 0,
  products: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Cart>) => {

      const product = state.products.find((product) => product._id === action.payload._id);

      if (product && product.quantity > 0) {
        product.quantity -= 1;
      }

      const isExist = state.carts.find((product) => product._id === action.payload._id);
      if (!isExist) {
        state.carts.push({ ...action.payload, quantity: 1 });
      } else {
        isExist.quantity += 1;
      }
      
      state.selectedItems = setSelectedItems(state);
      state.totalPrice = setTotalPrice(state);

    },
    
    
    updateQuantity: (state, action: PayloadAction<{ _id: string; type: 'increment' | 'decrement' }>) => {
      const product = state.carts.find((product) => product._id === action.payload._id);

      if (product) {
        if (action.payload.type === 'increment') {
          if (product.quantity >= 0) {
            product.quantity += 1;
          }
        } else if (action.payload.type === 'decrement' && product.quantity > 1) {
          if (product.quantity > 0) {
            product.quantity -= 1;
          }
        }
      }
      state.selectedItems = setSelectedItems(state);
      state.totalPrice = setTotalPrice(state);
    },
    clearCart: (state) => {
      state.carts = [];
      state.selectedItems = 0;
      state.totalPrice = 0;
    },
    clearProduct: (state, action: PayloadAction<{ _id: string }>) => {
      state.carts = state.carts.filter((product) => product._id !== action.payload._id);
      // Update state properties
      state.selectedItems = setSelectedItems(state);
      state.totalPrice = setTotalPrice(state);
    },
  },
});

export const setSelectedItems = (state: CartState) =>
  state.carts.reduce((total: number, product) => {
    return Number(total + product.quantity)
  }, 0);
export const setTotalPrice = (state: CartState) =>
  state.carts.reduce((total: number, product) => {
    return Number(total + product.quantity * product.price)
  }, 0);


export const { addToCart, updateQuantity, clearCart, clearProduct } = cartSlice.actions

export default cartSlice.reducer;