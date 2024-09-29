import { calculatePriceWithDiscount } from "../../lib/utils/calculatePrice";

describe("calculatePriceWithDiscount", () => {
	it("should return the original price when discount is 0", () => {
		const price = 100;
		const discountPercentage = 0;
		const result = calculatePriceWithDiscount(price, discountPercentage);
		expect(result).toBe(price);
	});

	it("should return the discounted price when discount is greater than 0", () => {
		const price = 100;
		const discountPercentage = 20;
		const result = calculatePriceWithDiscount(price, discountPercentage);
		expect(result).toBe(80);
	});

	it("should return 0 when price is 0", () => {
		const price = 0;
		const discountPercentage = 20;
		const result = calculatePriceWithDiscount(price, discountPercentage);
		expect(result).toBe(0);
	});
});
