import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IProduct } from "../types/product.types";

interface IProductsData {
	products: IProduct[];
	total: number;
}

export const productsApi = createApi({
	reducerPath: "productsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products/" }),
	tagTypes: ["products"],
	endpoints: (builder) => ({
		getProducts: builder.query<
			IProductsData,
			{ searchQuery: string; productsLimit: number }
		>({
			query: (arg: { searchQuery: string; productsLimit: number }) =>
				`search?q=${arg.searchQuery}&limit=${arg.productsLimit}&skip=0`,
		}),

		getProductById: builder.query<IProduct, number>({
			query: (productId: number) => productId.toString(),
		}),
	}),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
