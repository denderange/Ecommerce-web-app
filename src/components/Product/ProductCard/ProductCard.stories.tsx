// src/components/Product/ProductCard/ProductCard.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import { ProductCard } from "./ProductCard";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

const meta: Meta<typeof ProductCard> = {
	component: ProductCard,
	tags: ["autodocs"],
	decorators: [
		(Story: any) => (
			<Provider store={store}>
				<BrowserRouter>
					<Story />
				</BrowserRouter>
			</Provider>
		),
	],
};

export default meta;

export const Default: StoryObj<typeof ProductCard> = {
	args: {
		id: 1,
		imagePath:
			"https://cdn.pixabay.com/photo/2024/01/15/19/40/animal-8510775_1280.jpg",
		productName: "Product 1",
		price: 19.99,
	},
	decorators: [
		(Story: any) => (
			<div
				style={{ width: "300px", height: "400px", border: "1px solid #ccc" }}>
				{Story()}
			</div>
		),
	],
};

export const WithBlankImage: StoryObj<typeof ProductCard> = {
	args: {
		id: 1,
		imagePath: "",
		productName: "Product 1",
		price: 19.99,
	},
	decorators: [
		(Story: any) => (
			<div
				style={{ width: "300px", height: "400px", border: "1px solid #ccc" }}>
				{Story()}
			</div>
		),
	],
};
