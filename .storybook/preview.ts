import type { Preview } from "@storybook/react";
import "../src/styles/normalize.css";
import "../src/styles/global.css";
import { Provider } from "react-redux";
import { store } from "../src/store/store";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
