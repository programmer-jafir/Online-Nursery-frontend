import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    products: [] as any,
    selectedItems: 0,
    totalPrice: 0,
    quantiy: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state,action)=>{
           const isExist = state.products.find((product)=>product._id === action._id ) ;
           if(!isExist){
            state.products.push({...action.payload, quantity:1});
           }
           state.selectedItems=setSelectedItems(state);
           state.totalPrice=setTotalPrice(state);
        },
        updateQuantity: (state:any,action)=>{
            const products=state.products.map((product:any)=>{
                if(product._id === action.payload._id){
                    if(action.payload.type === "increment"){
                        if (product.quantity >= 0) {
                            product.quantity += 1;
                          }
                    }else if(action.payload.type === "decrement"){
                        if (product.quantity > 0) {
                            product.quantity -= 1;
                          }
                    }
                }
                return product;
            });
            state.selectedItems=setSelectedItems(state);
           state.totalPrice=setTotalPrice(state);
        },
        clearCart:(state)=>{
            state.products=[];
            state.selectedItems=0;
            state.totalPrice=0;
        },
        clearProduct:(state,action)=>{
           
        }
    },
});

export const setSelectedItems =(state:any)=>
    state.products.reduce((total:number, product:any)=>{
        return Number(total+product.quantity)
    },0);
export const setTotalPrice =(state:any)=>
    state.products.reduce((total:number, product:any)=>{
        return Number(total+product.quantity*product.price)
    },0);


export const { addToCart, updateQuantity, clearCart, clearProduct } = cartSlice.actions

export default cartSlice.reducer;