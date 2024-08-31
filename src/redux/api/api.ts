import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000/api"}),// https://plant-life-backend.vercel.app/api
    endpoints: (builder) => ({
        getProducts : builder.query({
            query: () => ({
                url: '/product',
                method:'GET',
            }),
            
        }),
        addProduct : builder.mutation({
            query: (data) => ({
                url: '/product',
                method:'POST',
                body: data,
            }),
        }),
        editProduct : builder.mutation({
            // query: (data) => (console.log("inside data=>", data),{
            //     url: '/product/:id',
            //     method:'PUT',
            //     body: data,
            // }),
            
            query: (data) => {
                console.log("inside data=>", data.updatedProduct);
                return {
                    url: `/product/${data._id}`,
                    method: 'PUT',
                    body: data.updatedProduct,   
                };
            },
        }),
    }),
});

export const {useGetProductsQuery, useAddProductMutation, useEditProductMutation} = baseApi;