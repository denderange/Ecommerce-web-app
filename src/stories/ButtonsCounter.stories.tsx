import { Meta, StoryObj } from "@storybook/react";
import { ButtonsCounter } from "../components";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof ButtonsCounter>;

const meta: Meta<StoryProps> = {
	component: ButtonsCounter,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Size: Story = {
	args: {},

	render: (args) => <ButtonsCounter {...args} />,
};
