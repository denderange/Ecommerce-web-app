import { CartT } from "../../types/cart.types";

export const getQuantityInCart = (cart: CartT[], productId: number) => {
	if (cart[0]?.products) {
		const product = cart[0]?.products.find(
			(product) => product.id === productId
		);
		if (product) {
			return product.quantity;
		}
	}

	return 0;
};
