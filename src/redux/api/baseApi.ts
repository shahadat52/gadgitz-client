import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

// ${process.env.NEXT_PUBLIC_API_URL}
export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:5000/api`,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.auth.token;

            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }

            return headers
        },
    }),
    tagTypes: ['services', 'bookings', 'slots', 'users', 'reviews'],
    endpoints: () => ({})
})
