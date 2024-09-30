
import { baseApi } from "../../api/baseApi";

const serviceApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllServices: builder.query({
            query: (query) => {
                const params = new URLSearchParams();
                if (query === 6) {
                    params.append('limit', '6')
                }
                return {
                    url: `/products/?${params.toString()}`,
                    method: 'GET',
                }

            },
            providesTags: ["products"]
        }),
        getServiceById: builder.query({
            query: (id) => {
                return {
                    url: `/products/${id}`,
                    method: 'GET',
                }
            }
        }),
        addProduct: builder.mutation({
            query: (data) => {
                return {
                    url: '/products',
                    method: 'POST',
                    body: data
                }
            },
            invalidatesTags: ['products']
        }),
        deleteService: builder.mutation({
            query: (id) => {
                return {
                    url: `/products/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['products']
        }),
        updateService: builder.mutation({
            query: (data) => {
                return {
                    url: `/products/${data?.id}`,
                    method: 'PUT',
                    body: data?.data
                }
            },
            invalidatesTags: ['products']
        }),
    })

});

export const { useGetAllServicesQuery, useGetServiceByIdQuery, useAddProductMutation, useDeleteServiceMutation, useUpdateServiceMutation } = serviceApi