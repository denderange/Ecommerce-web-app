import { Meta, StoryObj } from "@storybook/react";
import { ProductRating } from "./ProductRating";

const meta: Meta<typeof ProductRating> = {
	component: ProductRating,
	tags: ["autodocs"],
	args: {
		rating: 3, // default rating value
	},
};

export default meta;

export const Default: StoryObj<typeof ProductRating> = {
	args: {
		rating: 3,
	},
};

export const HighRating: StoryObj<typeof ProductRating> = {
	args: {
		rating: 5,
	},
};

export const LowRating: StoryObj<typeof ProductRating> = {
	args: {
		rating: 1,
	},
};
