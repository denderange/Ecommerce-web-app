import { render, screen } from "@testing-library/react";
import { ProductRating } from "../../components";

describe("ProductRating", () => {
	it("should render the stars container", () => {
		render(<ProductRating rating={5} />);

		expect(screen.getByTestId("stars-container")).toBeInTheDocument();
	});

	it("should render the correct number of colored stars", () => {
		render(<ProductRating rating={3} />);
		expect(screen.getAllByTestId("colored-star")).toHaveLength(3);
	});

	it("should render the correct number of gray stars", () => {
		render(<ProductRating rating={3} />);
		expect(screen.getAllByTestId("gray-star")).toHaveLength(2);
	});
});
