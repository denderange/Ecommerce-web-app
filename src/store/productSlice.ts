import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IProduct } from "../types/product.types";

interface IProductsData {
	products: IProduct[];
	total: number;
}

export const productsApi = createApi({
	reducerPath: "productsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://dummyjson.com/auth/products/",
	}),
	tagTypes: ["products"],

	endpoints: (builder) => ({
		getProducts: builder.query<
			IProductsData,
			{ searchQuery: string; productsLimit: number; token: string }
		>({
			query: (args: {
				searchQuery: string;
				productsLimit: number;
				token: string;
			}) => ({
				url: `search?q=${args.searchQuery}&limit=${args.productsLimit}&skip=0`,
				method: "GET",
				headers: {
					Authorization: `Bearer ${JSON.parse(args.token)}`,
					"Content-Type": "application/json",
				},
			}),
		}),

		getProductById: builder.query<
			IProduct,
			{ productId: number; token: string }
		>({
			query: (args: { productId: number; token: string }) => ({
				url: `${args.productId.toString()}`,
				method: "GET",
				headers: {
					Authorization: `Bearer ${JSON.parse(args.token)}`,
					"Content-Type": "application/json",
				},
			}),
		}),
	}),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
