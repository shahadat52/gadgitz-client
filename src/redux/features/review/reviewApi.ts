import { baseApi } from "../../api/baseApi";

const reviewApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createReview: builder.mutation({
            query: (data) => {

                return {
                    url: '/reviews',
                    method: 'POST',
                    body: data
                }
            },
            invalidatesTags: ['reviews']
        }),
        getAllReviews: builder.query({
            query: (query) => {
                const params = new URLSearchParams();

                if (query === 6) {
                    params.append('limit', '6')
                }
                console.log(params.toString());
                return {
                    url: `/reviews/?${params.toString()}`,
                    method: 'GET',
                }
            },
            providesTags: ['reviews']
        })


    })
});

export const { useCreateReviewMutation, useGetAllReviewsQuery } = reviewApi