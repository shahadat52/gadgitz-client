
import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createBooking: builder.mutation({
            query: (data) => {

                return {
                    url: '/orders',
                    method: 'POST',
                    body: data
                }
            },
            invalidatesTags: ['bookings', 'myOrders']
        }),
        getAllBookings: builder.query({
            query: () => {

                return {
                    url: '/orders',
                    method: 'GET',
                }
            },
            providesTags: ['bookings']
        }),
        getOrdersByCustomer: builder.query({
            query: () => {
                return {
                    url: '/my-orders',
                    method: 'GET',
                }
            },
            providesTags: ['myOrders']
        }),
        paymentIntend: builder.mutation({
            query: (payload) => {
                return {
                    url: '/payment/init',
                    method: 'POST',
                    body: payload
                }
            }
        }),



    })
});

export const { useGetAllBookingsQuery, useGetOrdersByCustomerQuery, useCreateBookingMutation, usePaymentIntendMutation } = bookingApi