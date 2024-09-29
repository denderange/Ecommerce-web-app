// src/components/CartItem/CartItem.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import { CartItem } from "./CartItem";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof CartItem> = {
	component: CartItem,
	tags: ["autodocs"],

	decorators: [
		(Story: any) => (
			<BrowserRouter>
				<Story />
			</BrowserRouter>
		),
	],
};

export default meta;

type Story = StoryObj<typeof CartItem>;

export const DefaultState: Story = {
	args: {
		cartItem: {
			id: 1,
			title: "Product 1",
			price: 10.99,
			quantity: 2,
			total: 20.98,
			discountPercentage: 0,
			discountedTotal: 20.98,
			discountedPrice: 22.4,
			thumbnail:
				"https://cdn.pixabay.com/photo/2024/08/24/18/49/spurred-turtle-8994997_1280.jpg",
		},
	},
};
