import { render, screen } from "@testing-library/react";
import { ButtonLoadMore } from "../../components";

describe("ButtonLoadMore", () => {
	it("should render button with text when loading state is false", () => {
		render(
			<ButtonLoadMore
				loading={false}
				handleClick={() => {}}
			/>
		);

		const button = screen.getByTestId("buttonLoadMore");
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Show more");
	});

	it("should render button with PulseLoader when loading state is true", () => {
		render(
			<ButtonLoadMore
				loading={true}
				handleClick={() => {}}
			/>
		);
		expect(screen.getByTestId("buttonLoadMore")).toContainHTML("PulseLoader");
	});
});
