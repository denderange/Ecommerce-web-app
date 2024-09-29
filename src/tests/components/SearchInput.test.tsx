import { render, screen, fireEvent } from "@testing-library/react";
import { SearchInput } from "../../components";

describe("SearchInput component", () => {
	it("renders input with correct placeholder", () => {
		render(<SearchInput handleSearch={() => {}} />);

		const inputElement = screen.getByPlaceholderText("Search by title");
		expect(inputElement).toBeInTheDocument();
	});

	it("calls handleSearch on input change", () => {
		const mockHandleSearch = vi.fn();
		render(<SearchInput handleSearch={mockHandleSearch} />);

		const inputElement = screen.getByPlaceholderText("Search by title");

		fireEvent.change(inputElement, { target: { value: "Test input" } });

		expect(mockHandleSearch).toHaveBeenCalled();
		expect(mockHandleSearch).toHaveBeenCalledWith(
			expect.objectContaining({
				target: expect.objectContaining({
					value: "Test input",
				}),
			})
		);
	});
});
