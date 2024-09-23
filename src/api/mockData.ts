import type { Product } from "../types/product.types";

const randomPrice = Math.floor(10 + Math.random() * 300) + Math.random();

export const generateMockProducts = (itemsCount: number): Product[] => {
	const productsArray = [];

	for (let i = 0; i < itemsCount; i++) {
		productsArray.push({
			imagePath: "",
			productName: "Essence Mascara Lash Princess",
			price: randomPrice,
		});
	}

	return productsArray;
};
