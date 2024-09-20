import { Meta, StoryObj } from "@storybook/react";
import { ButtonAddToCart } from "./ButtonAddToCart";
import { fn } from "@storybook/test";

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

export const Text = {
	args: {
		variant: "text",
	},
};

// export const ActionsData = {
//   handleAddToCart: fn()
// }
