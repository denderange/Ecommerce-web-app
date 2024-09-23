import { generateMockProducts } from "./mockData";
import type { Product } from "../types/product.types";

const getAsync = <T>(value: T[]): Promise<T[]> => {
	return new Promise((res) => {
		setTimeout(() => res(value), Math.random() * 3000);
	});
};

export const getProducts = (itemsCount: number): Promise<Product[]> =>
	getAsync(generateMockProducts(itemsCount));
