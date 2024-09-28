import { createAsyncThunk } from "@reduxjs/toolkit/react";

export const getCartByUserId = createAsyncThunk(
	"getCartByUserId",
	async (args: { userId: number; token: string }, thunkAPI) => {
		try {
			const res = await fetch(
				`https://dummyjson.com/auth/carts/user/${args.userId}`,
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${JSON.parse(args.token)}`,
						"Content-Type": "application/json",
					},
				}
			);

			return await res.json();
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

type ProductsToUpdate = {
	id: number;
	quantity: number;
};

export const updateCart = createAsyncThunk(
	"updateCart",
	async (
		args: { cartId: number; token: string; products: ProductsToUpdate[] },
		thunkAPI
	) => {
		try {
			const res = await fetch(
				`https://dummyjson.com/auth/carts/${args.cartId}`,
				{
					method: "PUT",
					headers: {
						Authorization: `Bearer ${JSON.parse(args.token)}`,
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						merge: false,
						products: [...args.products],
					}),
				}
			);

			return await res.json();
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);
