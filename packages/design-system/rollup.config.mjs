import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import alias from "@rollup/plugin-alias";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";
import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin";

export default [
	{
		input: "src/index.ts",
		output: [
			{
				file: "dist/index.cjs.js",
				format: "cjs",
				sourcemap: true,
				interop: "auto",
			},
			{
				file: "dist/index.esm.js",
				format: "esm",
				sourcemap: true,
				interop: "esModule",
			},
		],
		plugins: [
			nodeResolve(),
			commonjs(),
			typescript(),
			babel({
				extensions: [".ts", ".tsx"],
				include: ["src/**/*"],
				babelHelpers: "bundled",
				exclude: /node_modules/,
				presets: [
					["@babel/preset-env"],
					["@babel/preset-typescript"],
					["@babel/preset-react"],
				],
			}),
			alias({
				entries: [{ find: /^@\/(.*)/, replacement: "./src/$1" }],
			}),
			peerDepsExternal(),
			terser(),
			vanillaExtractPlugin(),
		],
	},
	{
		input: "dist/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "esm" }],
		plugins: [dts()],
	},
];
