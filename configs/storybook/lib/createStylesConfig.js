import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const createStylesConfig = (config) => {
	config.plugins.push(new VanillaExtractPlugin(), new MiniCssExtractPlugin());

	config.module.rules.forEach((rule) => {
		if (
			typeof rule !== "string" &&
			rule.test instanceof RegExp &&
			rule.test.test("test.css")
		) {
			rule.exclude = /\.vanilla\.css$/i;
		}
	});

	config.module.rules.push({
		test: /\.vanilla\.css$/i,
		use: [
			MiniCssExtractPlugin.loader,
			{
				loader: require.resolve("css-loader"),
				options: {
					url: false,
				},
			},
		],
	});
};
