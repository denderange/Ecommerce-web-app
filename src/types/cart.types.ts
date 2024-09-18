import type { ProductT } from "./product.types";

export interface CartT {
	id: number;
	products: ProductT[] | [];
	total: number;
	discountedTotal: number;
	userId: number;
	totalProducts: number;
	totalQuantity: number;
}
