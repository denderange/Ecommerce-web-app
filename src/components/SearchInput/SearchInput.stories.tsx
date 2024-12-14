import { Meta, StoryObj } from "@storybook/react";
import { SearchInput } from "./SearchInput";
import { fn } from "@storybook/test";

const meta: Meta<typeof SearchInput> = {
	component: SearchInput,
	tags: ["autodocs"],
	args: {
		handleSearch: fn(),
	},
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Search: Story = {
	args: {
		// handleSearch(e) {
		// 	e.currentTarget.value;
		// },
	},
};
