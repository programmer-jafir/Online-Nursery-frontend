import {configureStore} from '@reduxjs/toolkit';
import cartReduser from './features/cartSlice';
import productReducer from './features/productSlice';
import orderReducer from './features/orderSlice'; 
import searchReducer from './features/searchSlice';
import { baseApi } from './api/api';


export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        search: searchReducer,
        cart: cartReduser,
        product: productReducer,
        order: orderReducer,
    },
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(baseApi.middleware)
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
