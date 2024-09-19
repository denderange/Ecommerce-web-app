import type { TProductInCart } from "./product.types";

export interface CartT {
	id: number;
	products: TProductInCart[] | [];
	total: number;
	discountedTotal: number;
	userId: number;
	totalProducts: number;
	totalQuantity: number;
}
