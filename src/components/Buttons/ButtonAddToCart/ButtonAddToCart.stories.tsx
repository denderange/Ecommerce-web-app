import { Meta, StoryObj } from "@storybook/react";
import { ButtonAddToCart } from "../..";

const meta: Meta<typeof ButtonAddToCart> = {
	component: ButtonAddToCart,
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ButtonAddToCart>;

export const Icon: Story = {
	args: {
		variant: "icon",
	},
};

export const Text: Story = {
	args: {
		variant: "text",
	},
};
