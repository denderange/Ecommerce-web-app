import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CartT } from "../types/cart.types";

export const getCartByUserId = createAsyncThunk(
	"cart/userId",
	async (userId: number, thunkAPI) => {
		try {
			const res = await fetch(`https://dummyjson.com/carts/user/${userId}`);
			return await res.json();
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

interface CartState {
	cart: CartT[];
	loading: "" | "pending" | "fulfilled" | "rejected";
	error: string | null | undefined;
}

const initialState = {
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
			});
	},
});

export default cartSlice.reducer;
