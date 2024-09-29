import { describe, it, expect } from "vitest";
import cartReducer, { initialState, CartState } from "../../store/cartSlice";
import { getCartByUserId, updateCart } from "../../store/cartActions";

const mockCart = {
	id: 5,
	products: [
		{
			id: 1,
			title: "Product 1",
			price: 55,
			quantity: 1,
			total: 2,
			discountPercentage: 3,
			discountedTotal: 3,
			thumbnail: "",
			discountedPrice: 66,
		},
		{
			id: 2,
			title: "Product 2",
			price: 56,
			quantity: 2,
			total: 3,
			discountPercentage: 4,
			discountedTotal: 5,
			thumbnail: "",
			discountedPrice: 60,
		},
	],
	total: 6,
	discountedTotal: 12,
	userId: 23,
	totalProducts: 20,
	totalQuantity: 14,
};

describe("cartSlice reducer", () => {
	it("should return the initial state", () => {
		expect(cartReducer(undefined, { type: "undefined" })).toEqual(initialState);
	});

	describe("getCartByUserId", () => {
		it("should handle pending state", () => {
			const nextState = cartReducer(initialState, {
				type: getCartByUserId.pending.type,
			});
			expect(nextState).toEqual({
				...initialState,
				loading: "pending",
			});
		});

		it("should handle fulfilled state", () => {
			const payload = { carts: [mockCart] };
			const nextState = cartReducer(initialState, {
				type: getCartByUserId.fulfilled.type,
				payload,
			});
			expect(nextState).toEqual({
				...initialState,
				cart: [mockCart],
				loading: "fulfilled",
			});
		});

		it("should handle rejected state", () => {
			const errorMessage = "Failed to fetch cart";
			const nextState = cartReducer(initialState, {
				type: getCartByUserId.rejected.type,
				error: { message: errorMessage },
			});
			expect(nextState).toEqual({
				...initialState,
				loading: "rejected",
				error: errorMessage,
			});
		});
	});

	describe("updateCart", () => {
		const preloadedState: CartState = {
			...initialState,
			cart: [mockCart],
		};

		it("should handle pending state", () => {
			const nextState = cartReducer(preloadedState, {
				type: updateCart.pending.type,
			});
			expect(nextState).toEqual({
				...preloadedState,
				loading: "pending",
			});
		});

		it("should handle fulfilled state", () => {
			const updatedProducts = [
				{ productId: 1, name: "Product 1", quantity: 3 },
				{ productId: 2, name: "Product 2", quantity: 4 },
			];

			const nextState = cartReducer(preloadedState, {
				type: updateCart.fulfilled.type,
				payload: { products: updatedProducts },
			});

			expect(nextState.cart[0].products).toEqual(updatedProducts);
			expect(nextState.loading).toBe("fulfilled");
		});

		it("should handle rejected state", () => {
			const errorMessage = "Failed to update cart";
			const nextState = cartReducer(preloadedState, {
				type: updateCart.rejected.type,
				error: { message: errorMessage },
			});
			expect(nextState).toEqual({
				...preloadedState,
				loading: "rejected",
				error: errorMessage,
			});
		});
	});
});
