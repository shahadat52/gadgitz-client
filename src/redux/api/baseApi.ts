import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

// http://localhost:5000/api
export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.auth.token;

            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }

            return headers
        },
    }),
    tagTypes: ['products', 'bookings', 'slots', 'myOrders', 'users', 'reviews'],
    endpoints: () => ({})
})
