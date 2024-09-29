/**
 * Calculate the price of a product with a given discount percentage.
 * @param {number} price The price of the product.
 * @param {number} discountPercentage The discount percentage to apply.
 * @returns {number} The price of the product with the discount applied.
 */

export const calculatePriceWithDiscount = (
	price: number,
	discountPercentage: number
) => {
	return Number((price - (price * discountPercentage) / 100).toFixed(2));
};
