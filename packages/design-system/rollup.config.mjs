import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import alias from "@rollup/plugin-alias";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin";
import esbuild from 'rollup-plugin-esbuild'

const external = ['react', 'react-dom', /node_modules/]

const plugins = [
	vanillaExtractPlugin(),
	peerDepsExternal(),
	nodeResolve(),
	commonjs(),
	alias({
		entries: [{ find: /^@\/(.*)/, replacement: "./src/$1" }],
	}),
	esbuild({
		sourceMap: false,
		// minify: true,
	})
]

const outputOptions = {
	preserveModules: true,
	preserveModulesRoot: 'src',
	assetFileNames({ name }) {
		return name.replace(/^src\/(.+)\.ts\.vanilla\.css$/, '$1');
	},
	exports: 'named',
	globals: {
		react: "React",
		"react-dom": "ReactDOM",
	},
}
export default [
	{
		input: "src/index.ts",
		external,
		output: {
			dir: 'dist',
			format: 'cjs',
			entryFileNames({ name }) {
				return `${name.replace(/\.css$/, '.css.vanilla')}.js`;
			},
			...outputOptions
		},
		plugins
	},
	{
		input: "src/index.ts",
		external,
		output: {
			dir: 'dist',
			format: "esm",
			entryFileNames({ name }) {
				return `${name.replace(/\.css$/, '.css.vanilla')}.mjs`;
			},
			...outputOptions
		},
		plugins
	},
	{
		input: "src/vars/index.ts",
		external,
		treeshake: {
			moduleSideEffects: false
		},
		output: {
			dir: 'dist',
			format: "cjs",
			entryFileNames({ name }) {
				return `${name.replace(/\.css$/, '.css.vanilla')}.js`;
			},
			...outputOptions
		},
		plugins,
	},
	{
		input: "src/vars/index.ts",
		external,
		output: {
			dir: 'dist',
			format: "esm",
			entryFileNames({ name }) {
				return `${name.replace(/\.css$/, '.css.vanilla')}.mjs`;
			},
			...outputOptions
		},
		plugins,
		treeshake: {
			moduleSideEffects: false
		}
	},
	{
		input: 'src/index.ts',
		plugins: [
			dts(),
		],
		output: [
			{
				dir: 'dist',
				format: 'esm',
				preserveModules: true,
				preserveModulesRoot: 'src',
			},
		],
	},
];
