// !!!
// TODO: whole the file should be removed and it's
// data replaced with actual data from the database
// and app state
// !!!
import { Cart } from "../types/cart.types";

export const cart: Cart[] = [
	{
		id: 1,
		product: {
			id: 1,
			imagePath: "",
			productName: "Essence Mascara Lash Princess",
			price: 110,
		},
		amount: 1,
	},
	{
		id: 1,
		product: {
			id: 2,
			imagePath: "",
			productName: "Essence Mascara Lash Princess",
			price: 110,
		},
		amount: 1,
	},
	{
		id: 1,
		product: {
			id: 3,
			imagePath: "",
			productName: "Essence Mascara Lash Princess",
			price: 110,
		},
		amount: 5,
	},
	{
		id: 1,
		product: {
			id: 4,
			imagePath: "",
			productName: "Essence Mascara Lash Princess",
			price: 110,
		},
		amount: 0,
	},
];
