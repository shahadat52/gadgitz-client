import { baseApi } from "../../api/baseApi";


const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (userInfo) => {
                console.log(userInfo)
                return {
                    url: "/auth/signup",
                    method: "POST",
                    body: userInfo
                }
            },
        }),

        login: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/login',
                method: 'POST',
                body: userInfo
            })
        })
    }),
});

export const { useSignUpMutation, useLoginMutation } = authApi

