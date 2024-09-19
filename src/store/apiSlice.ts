import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IProduct } from "../types/product.types";

interface IProductsData {
	products: IProduct[];
	total: number;
}

export const productsApi = createApi({
	reducerPath: "productsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
	tagTypes: ["IProduct"],
	endpoints: (builder) => ({
		getProducts: builder.query<IProductsData, string>({
			query: (searchQuery: string) =>
				`products/search?q=${searchQuery}&limit=12`,
		}),
		getProductById: builder.query<IProduct, number>({
			query: (productId: number) => `products/${productId}`,
		}),
		searchProduct: builder.query({
			query: (searchQuery: string) =>
				`products/search?q=${searchQuery}&limit=12`,
		}),
	}),
});

export const {
	useGetProductsQuery,
	useGetProductByIdQuery,
	useSearchProductQuery,
} = productsApi;
