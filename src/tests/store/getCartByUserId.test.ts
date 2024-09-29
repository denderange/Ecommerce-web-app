import cartReducer, { initialState } from "../../store/cartSlice";
import { getCartByUserId } from "../../store/cartActions";

describe("extraReducer getCartByUserId", () => {
	it("check pending fetch", () => {
		const statePending = cartReducer(
			initialState,
			getCartByUserId.pending("", { userId: 11, token: "string" })
		);

		expect(initialState.cart).toEqual([]);
		expect(statePending.loading).toBe("pending");
		expect(statePending.cart).toEqual([]);
	});
});
