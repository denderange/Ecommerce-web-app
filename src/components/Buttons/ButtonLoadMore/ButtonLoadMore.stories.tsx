import { Meta, StoryObj } from "@storybook/react";
import { ButtonLoadMore } from "../..";

const meta: Meta<typeof ButtonLoadMore> = {
	component: ButtonLoadMore,
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ButtonLoadMore>;

export const ActiveState: Story = {
	args: {
		btnText: "Show more",
		loading: false,
	},
};

export const LoadingState: Story = {
	args: {
		loading: true,
	},
};
