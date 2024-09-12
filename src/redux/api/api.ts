import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({baseUrl: "https://plant-life-backend.vercel.app/api",
        credentials:"include",
    }),
    endpoints: (builder) => ({
        getProducts : builder.query({
            query: () => ({
                url: '/product',
                method:'GET',
            }),
            // providesTags: ['Products'],
            
        }),
        addProduct : builder.mutation({
            query: (data) => ({
                url: '/product',
                method:'POST',
                body: data,
            }),
            // invalidatesTags: ['Products'],
        }),
        editProduct : builder.mutation({
            
            query: (data) => {
                console.log("inside data=>", data.updatedProduct);
                return {
                    url: `/product/${data._id}`,
                    method: 'PUT',
                    body: data.updatedProduct,   
                };
            },
            // invalidatesTags: ['Products'],
        }),
        getaProduct : builder.query({
            query: (_id: string) => ({
                url: `/product/${_id}`,
                method:'GET',
            }),
            
        }),
        deleteaProduct : builder.mutation({
            query: (_id: string) => ({
                url: `/product/${_id}`,
                method:'DELETE',
            }),
            
        }),
        createOrder: builder.mutation({
            query: (data) => ({
              url: "/orders",
              method: "POST",
              body: data,
            }),
          }),
    }),
});

export const {useGetProductsQuery, useAddProductMutation, useEditProductMutation, useGetaProductQuery, useDeleteaProductMutation, useCreateOrderMutation} = baseApi;