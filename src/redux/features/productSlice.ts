import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
type TInitialState = {
    products: TProduct[];
}
const initialState: TInitialState = {
  products: [],
};


const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TProduct>) => {
      state.products.push({...action.payload});
    },
  
  editProduct: (state, action) => { 
    const { _id, updatedProduct } = action.payload;
      const existingProductIndex = state.products.findIndex(product => product._id === _id);
      if (existingProductIndex !== -1) {
        state.products[existingProductIndex] = { 
          ...state.products[existingProductIndex],
           ...{updatedProduct }
          };

      }
    },
}
});

export const { addProduct, editProduct } = productSlice.actions;
export default productSlice.reducer;
