import { resolve } from "path";

import {
	createAliases,
	createStylesConfig,
	getAbsolutePathToPackage,
} from "@example-monorepo/storybook-config";

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		getAbsolutePathToPackage("@storybook/addon-links"),
		getAbsolutePathToPackage("@storybook/addon-essentials"),
		getAbsolutePathToPackage("@storybook/addon-onboarding"),
		getAbsolutePathToPackage("@storybook/addon-interactions"),
	],
	framework: {
		name: getAbsolutePathToPackage("@storybook/react-webpack5"),
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	webpackFinal(config) {
		createStylesConfig(config);
		createAliases(config, resolve(__dirname, "../src"));

		return config;
	},
};
export default config;
