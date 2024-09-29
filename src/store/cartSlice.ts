import { createSlice } from "@reduxjs/toolkit";
import { CartT } from "../types/cart.types";
import { getCartByUserId, updateCart } from "./cartActions";

export interface CartState {
	cart: CartT[];
	loading: "" | "pending" | "fulfilled" | "rejected";
	error: null | string | undefined;
}

export const initialState = {
	cart: [],
	loading: "",
	error: null,
} satisfies CartState as CartState;

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getCartByUserId.pending, (state) => {
				state.loading = "pending";
			})
			.addCase(getCartByUserId.fulfilled, (state, action) => {
				state.loading = "fulfilled";
				state.cart[0] = action.payload.carts[0];
			})
			.addCase(getCartByUserId.rejected, (state, action) => {
				state.loading = "rejected";
				state.error = action.error.message;
			})
			.addCase(updateCart.pending, (state) => {
				state.loading = "pending";
			})
			.addCase(updateCart.fulfilled, (state, action) => {
				state.loading = "fulfilled";
				state.cart[0].products = action.payload.products;
			})
			.addCase(updateCart.rejected, (state, action) => {
				state.loading = "rejected";
				state.error = action.error.message;
			});
	},
});

export default cartSlice.reducer;
