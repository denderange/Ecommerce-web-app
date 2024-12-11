import type { Product } from "./product.types";

export interface Cart {
	id: number;
	product: Product;
	amount: number;
}
