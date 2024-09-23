import { Meta, StoryObj } from "@storybook/react";
import { ButtonsCounter } from "../..";

const meta: Meta<typeof ButtonsCounter> = {
	component: ButtonsCounter,
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ButtonsCounter>;

export const SizeSmall: Story = {
	args: {
		size: "s",
	},
};

export const SizeMedium: Story = {
	args: {
		size: "m",
	},
};

export const Appearance: Story = {
	args: {
		showDelete: true || false,
	},
};
