import {
	BaseQueryFn,
	createApi,
	FetchArgs,
	fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { UserResponseT, UserT } from "../types/user.types";

interface ErrorT {
	status: number;
	data: {
		message: string;
	};
}

export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://dummyjson.com/auth/",
	}) as BaseQueryFn<string | FetchArgs, unknown, ErrorT, {}>,
	tagTypes: ["user"],

	endpoints: (builder) => ({
		loginUser: builder.mutation<UserResponseT, UserT>({
			query: (data: UserT) => ({
				url: "login",
				method: "POST",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username: data.username,
					password: data.password,
					expiresInMins: 30, // optional, defaults to 60
				}),
			}),
		}),

		getCurrentUser: builder.query({
			query: (token: string) => ({
				url: "me",
				method: "GET",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}),
		}),
	}),
});

export const { useLoginUserMutation, useGetCurrentUserQuery } = userApi;
