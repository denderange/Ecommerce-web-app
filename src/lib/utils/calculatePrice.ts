export const calculatePriceWithDiscount = (
	price: number,
	discountPercentage: number
) => {
	return Number((price - (price * discountPercentage) / 100).toFixed(2));
};
