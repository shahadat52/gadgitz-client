import { baseApi } from "@/redux/api/baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrders: builder.query({
            query: () => {
                return {
                    url: '/orders',
                    methods: 'GET'
                }
            }
        }),
        myOrders: builder.query({
            query: () => {
                return {
                    url: '/orders?{}',
                    methods: 'GET'
                }
            }
        })
    })
});

export const { useGetAllOrdersQuery } = orderApi