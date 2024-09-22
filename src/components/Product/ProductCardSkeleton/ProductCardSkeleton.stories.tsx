import { Meta, StoryObj } from "@storybook/react";
import { ProductCardSkeleton } from "../..";

const meta: Meta<typeof ProductCardSkeleton> = {
	component: ProductCardSkeleton,
	tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof ProductCardSkeleton> = {
	args: {},
	decorators: [
		(story) => (
			<div
				style={{ width: "300px", height: "400px", border: "1px solid #ccc" }}>
				{story()}
			</div>
		),
	],
};
