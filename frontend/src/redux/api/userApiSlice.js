
import apiSlice from './apiSlice.js';
import { USER_URL } from '../constant.js';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/signup`,
                method: "POST",
                body: data,
            })
        }),
        login: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/login`,
                method: "POST",
                body: data,
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USER_URL}/logout`,
                method: "POST",
            })
        })
    })
})
export const { useRegisterMutation, useLoginMutation, useLogoutMutation } = userApiSlice;