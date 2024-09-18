import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ComponentProps } from "react";
import { ButtonAddToCart } from "../components";
import "../styles/normalize.css";
import "../styles/global.css";

type StoryProps = ComponentProps<typeof ButtonAddToCart>;
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
	component: ButtonAddToCart,
	argTypes: {
		variant: {
			type: "string",
			description: "Вид кнопки",
			options: ["icon", "text"],
			control: {
				type: "radio",
			},
		},
	},
	args: {
		handleAddToCart: fn(),
		btnText: "Add to cart",
	},
};
export default meta;

export const Variants: Story = {
	args: {
		btnText: "Add to cart",
	},

	render: (args) => <ButtonAddToCart {...args} />,
};
